import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShoppingCartIcon from 'common/components/icons/ShoppingCart/ShoppingCart';

import ProductItem, { ProductItemProps } from './ProductItem';
import { ProductItemData } from 'features/ProductResults/ProductResults.interface';
import { WrappedWithTheme } from 'test-helpers';

const data: ProductItemData = {
  id: '1',
  title: 'Gorgeous Office Mug',
  price: 14.99,
  imageUri: 'https://picsum.photos/300',
};

const TestComponent = (props: ProductItemProps) => {
  return (
    <WrappedWithTheme>
      <ProductItem {...props} />
    </WrappedWithTheme>
  );
};

describe('#ProductItem', () => {
  const onAddToCartFn = jest.fn();
  const onRemoveFromCartFn = jest.fn();

  afterAll(() => {
    onAddToCartFn.mockClear();
    onRemoveFromCartFn.mockClear();
    cleanup();
  });

  it('should match the snapshot when product not added to the cart', async () => {
    const screen = render(
      <TestComponent
        onAddToCart={onAddToCartFn}
        onRemoveFromCart={onRemoveFromCartFn}
        {...data}
      />
    );

    expect(screen.container).toMatchSnapshot();
  });

  it('should match the snapshot when product is added to the cart', async () => {
    const screen = render(
      <TestComponent
        onAddToCart={onAddToCartFn}
        onRemoveFromCart={onRemoveFromCartFn}
        addedToCart
        {...data}
      />
    );

    expect(screen.container).toMatchSnapshot();
  });

  it('should call expected functions when depending on addedToCart prop', async () => {
    const screen = render(
      <TestComponent
        onAddToCart={onAddToCartFn}
        onRemoveFromCart={onRemoveFromCartFn}
        {...data}
      />
    );

    userEvent.click(screen.getByText('Add'));

    expect(onAddToCartFn).toHaveBeenCalled();

    screen.rerender(
      <TestComponent
        addedToCart
        onAddToCart={onAddToCartFn}
        onRemoveFromCart={onRemoveFromCartFn}
        {...data}
      />
    );

    userEvent.click(screen.getByText('Remove'));

    expect(onRemoveFromCartFn).toHaveBeenCalled();
  });
});
