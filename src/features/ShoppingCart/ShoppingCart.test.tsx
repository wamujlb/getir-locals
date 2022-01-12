import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ShoppingCart from './ShoppingCart';
import {
  WrappedWithRedux,
  WrappedWithReduxProps,
  WrappedWithTheme,
} from 'test-helpers';
import { createStore } from 'store/configureStore';
import {
  productItemDataMock,
  productItemDataMock_2,
} from 'features/ProductResults/__mocks__/productItem.mock';
import userEvent from '@testing-library/user-event';
import { addItem } from 'store/ducks/shoppingCart/shoppingCart.slice';

const TestComponent = ({ store }: WrappedWithReduxProps) => {
  return (
    <WrappedWithRedux store={store}>
      <WrappedWithTheme>
        <ShoppingCart />
      </WrappedWithTheme>
    </WrappedWithRedux>
  );
};

describe('#ShoppingCart', () => {
  const store = createStore();

  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot when shopping cart is empty', () => {
    const view = render(<TestComponent store={store} />);

    expect(view.container).toMatchSnapshot();
  });

  it('should show 1 item in the cart', () => {
    store.dispatch(addItem(productItemDataMock));

    const view = render(<TestComponent store={store} />);

    expect(view.container).toMatchSnapshot();
  });

  it('should remove the item from the shopping cart when the count becomes 0', () => {
    const view = render(<TestComponent store={store} />);

    expect(view.queryByRole('spinbutton')).toHaveValue(1);

    userEvent.click(view.getByRole('button', { name: 'Decrease count' }));

    expect(view.queryByRole('spinbutton')).not.toBeInTheDocument();
  });

  it('should change the count of the item in the cart', () => {
    store.dispatch(addItem(productItemDataMock));

    const view = render(<TestComponent store={store} />);

    expect(view.queryByRole('spinbutton')).toHaveValue(1);

    userEvent.click(view.getByRole('button', { name: 'Increase count' }));

    userEvent.click(view.getByRole('button', { name: 'Increase count' }));

    expect(view.getByRole('spinbutton')).toHaveValue(3);
  });
});
