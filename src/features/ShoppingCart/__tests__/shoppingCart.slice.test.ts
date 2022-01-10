import { createStore } from 'App/state/store';
import {
  productItemDataMock,
  productItemDataMock_2,
  productItemDataMock_3,
} from 'features/ProductResults/__mocks__/productItem.mock';
import {
  addItem,
  removeItem,
  updateItemCount,
  clearShoppingCart,
  selectShoppingCartItems,
  selectShoppingCartItemsList,
  selectShoppingCartTotalPrice,
} from '../shoppingCart.slice';

describe('#shoppingCartSlice', () => {
  describe('#actions', () => {
    const store = createStore();

    it('should add new item to shopping cart', () => {
      const expected = {
        [productItemDataMock.id]: {
          ...productItemDataMock,
          count: 1,
        },
      };

      store.dispatch(addItem(productItemDataMock));

      expect(selectShoppingCartItems(store.getState())).toEqual(expected);
    });

    it("should update item's count in shopping cart", () => {
      const expected = {
        [productItemDataMock.id]: {
          ...productItemDataMock,
          count: 2,
        },
      };

      store.dispatch(
        updateItemCount({ id: productItemDataMock.id, newCount: 2 })
      );

      expect(selectShoppingCartItems(store.getState())).toEqual(expected);
    });

    it('should remove item from shopping cart as new count is 0', () => {
      const expected = {};

      store.dispatch(
        updateItemCount({ id: productItemDataMock.id, newCount: 0 })
      );

      expect(selectShoppingCartItems(store.getState())).toEqual(expected);
    });

    it('should remove item from shopping cart', () => {
      store.dispatch(addItem(productItemDataMock));
      store.dispatch(
        addItem({
          ...productItemDataMock,
          id: 'id_2',
        })
      );

      const expected = {
        [productItemDataMock.id]: {
          ...productItemDataMock,
          count: 1,
        },
      };

      store.dispatch(removeItem('id_2'));

      expect(selectShoppingCartItems(store.getState())).toEqual(expected);
    });

    it('should clear shopping cart', () => {
      store.dispatch(addItem(productItemDataMock));
      store.dispatch(
        addItem({
          ...productItemDataMock,
          id: 'id_2',
        })
      );

      const expected = {};

      store.dispatch(clearShoppingCart());

      expect(selectShoppingCartItems(store.getState())).toEqual(expected);
    });
  });

  describe('#selectors', () => {
    const initItems = {
      [productItemDataMock.id]: {
        ...productItemDataMock,
        count: 2,
      },
      [productItemDataMock_2.id]: {
        ...productItemDataMock_2,
        count: 4,
      },
      [productItemDataMock_3.id]: {
        ...productItemDataMock_3,
        count: 1,
      },
    };

    const store = createStore({
      shoppingCart: {
        data: {
          items: initItems,
        },
      },
    });

    it('should select expected data for selectShoppingCartItems', () => {
      const expected = initItems;

      const results = selectShoppingCartItems(store.getState());

      expect(results).toEqual(expected);
    });

    it('should select expected data for selectShoppingCartItemsList', () => {
      const expected = [
        { ...productItemDataMock, count: 2 },
        { ...productItemDataMock_2, count: 4 },
        { ...productItemDataMock_3, count: 1 },
      ];

      const results = selectShoppingCartItemsList(store.getState());

      expect(results).toEqual(expected);
    });

    it('should return totalPrice for selectShoppingCartTotalPrice', () => {
      const expected = 92.4;

      const results = selectShoppingCartTotalPrice(store.getState());

      expect(results).toEqual(expected);
    });
  });
});
