import React from 'react';
import { cleanup, render } from '@testing-library/react';

import AppBarShoppingCart from './AppBarShoppingCart';
import { WrappedByTheme } from 'test-helpers';

describe('#AppBarShoppingCart', () => {
  afterEach(() => {
    cleanup();
  });

  it('should match snapshot when price is 0', () => {
    const screen = render(
      <WrappedByTheme>
        <AppBarShoppingCart value={0} />
      </WrappedByTheme>
    );

    expect(screen.container).toMatchSnapshot();
  });

  it('should match snapshot when price is not 0', () => {
    const screen = render(
      <WrappedByTheme>
        <AppBarShoppingCart value={123112} />
      </WrappedByTheme>
    );

    expect(screen.container).toMatchSnapshot();
  });
});
