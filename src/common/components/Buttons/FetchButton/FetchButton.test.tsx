import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ShoppingCartIcon from 'common/components/icons/ShoppingCart/ShoppingCart';

import FetchButton from './FetchButton';

describe('#FetchButton', () => {
  afterAll(() => {
    cleanup();
  });

  it('should match the snapshot when isFetching is true', async () => {
    const screen = render(<FetchButton isFetching>button text</FetchButton>);

    expect(screen.container).toMatchSnapshot();
  });

  it('should match the snapshot when isFetching is false and startIcon is provided', async () => {
    const screen = render(
      <FetchButton startIcon={<ShoppingCartIcon />}>button text</FetchButton>
    );

    expect(screen.container).toMatchSnapshot();
  });

  it('should match the snapshot when isFetching is false and startIcon is not provided', async () => {
    const screen = render(<FetchButton>button text</FetchButton>);

    expect(screen.container).toMatchSnapshot();
  });
});
