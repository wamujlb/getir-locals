import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'App/state/store';
import { ProductItemData } from 'features/ProductResults/ProductResults.interface';

export type ShoppingCartItemData = {
  count: number;
} & ProductItemData;

export type ShoppingCartItems = {
  [key: string]: ShoppingCartItemData;
};

export type ShoppingCartState = {
  data: {
    items: ShoppingCartItems;
  };
};

export const initialState: ShoppingCartState = {
  data: {
    items: {},
  },
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<ProductItemData>) => {
      state.data.items = {
        ...state.data.items,
        [payload.id]: {
          ...payload,
          count: 1,
        },
      };
    },
    updateItemCount: (
      state,
      { payload }: PayloadAction<{ id: string; newCount: number }>
    ) => {
      const item: ShoppingCartItemData | undefined =
        state.data.items[payload.id];

      if (item) {
        // Remove item when newCount is 0
        if (payload.newCount === 0) {
          delete state.data.items[payload.id];
          return;
        }

        state.data.items = {
          ...state.data.items,
          [payload.id]: {
            ...item,
            count: payload.newCount,
          },
        };
      }
    },
    removeItem: (state, { payload }: PayloadAction<string>) => {
      if (payload in state.data.items) {
        delete state.data.items[payload];
      }
    },
    clearShoppingCart: (state) => {
      state.data.items = {};
    },
  },
});

const shoppingCartDataSelector = (
  state: RootState
): ShoppingCartState['data'] => state.shoppingCart.data;

export const selectShoppingCartItems = createSelector(
  shoppingCartDataSelector,
  (data): ShoppingCartItems => data.items
);

export const selectShoppingCartItemsList = createSelector(
  shoppingCartDataSelector,
  (data): ShoppingCartItemData[] => Object.values(data.items)
);

export const selectShoppingCartTotalPrice = createSelector(
  selectShoppingCartItemsList,
  (items: ShoppingCartItemData[]): number => {
    return items.reduce(
      (acc, { price, count }: ShoppingCartItemData) => acc + price * count,
      0
    );
  }
);

export const { addItem, updateItemCount, removeItem, clearShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
