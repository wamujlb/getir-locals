import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MainAppBar from './MainAppBar';
import {
  WrappedWithRedux,
  WrappedWithReduxProps,
  WrappedWithTheme,
} from 'test-helpers';
import { createStore } from 'store/configureStore';
import { productItemDataMock } from 'features/ProductResults/__mocks__/productItem.mock';

const TestComponent = ({ store }: WrappedWithReduxProps) => {
  return (
    <WrappedWithRedux store={store}>
      <WrappedWithTheme>
        <MainAppBar />
      </WrappedWithTheme>
    </WrappedWithRedux>
  );
};

describe('#MainAppBar', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot when there are no items in shopping cart', async () => {
    const store = createStore();

    const view = render(<TestComponent store={store} />);

    expect(view.container).toMatchSnapshot();
  });

  it('should match the snapshot when items added to shopping cart', async () => {
    const store = createStore({
      shoppingCart: {
        data: {
          items: {
            [productItemDataMock.id]: {
              ...productItemDataMock,
              count: 3,
            },
          },
        },
      },
    });

    const view = render(<TestComponent store={store} />);

    expect(view.container).toMatchSnapshot();
  });
});
