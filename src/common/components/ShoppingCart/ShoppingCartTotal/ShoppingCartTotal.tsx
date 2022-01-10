import React from 'react';
import { Button } from '@mui/material';

import { usePrice } from 'common/hooks/usePrice';

export type ShoppingCartTotalProps = {
  totalPrice: number;
};

const ShoppingCartTotal = React.memo(
  ({ totalPrice }: ShoppingCartTotalProps) => {
    const price = usePrice({ value: totalPrice });

    return (
      <Button color="primary" variant="outlined" sx={{ px: 3, py: 1.5 }}>
        {price}
      </Button>
    );
  }
);

ShoppingCartTotal.displayName = 'ShoppingCartTotal';

export default ShoppingCartTotal;
