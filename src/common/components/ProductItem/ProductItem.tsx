import React from 'react';
import { Card, CardContent, CardProps, Typography } from '@mui/material';

import { useStyles } from './style';
import { usePrice } from 'common/hooks/usePrice';
import { ProductItemData } from 'features/ProductResults/ProductResults.interface';
import FetchButton from '../Buttons/FetchButton/FetchButton';
import ProductImage from '../ProductImage/ProductImage';

export type ProductItemProps = {
  addedToCart?: boolean;
  onAddToCart?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
} & ProductItemData &
  CardProps;

const ProductItem = React.memo(
  ({ title, price, addedToCart, imageUri, onAddToCart }: ProductItemProps) => {
    const classes = useStyles();
    const formattedPrice = usePrice({ value: price });

    return (
      <Card className={classes.root}>
        <ProductImage productTitle="title" src={imageUri} />

        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ color: 'primary.main', mt: 1 }}
        >
          {formattedPrice}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.primary', mb: 0.5 }}>
          {title}
        </Typography>

        <FetchButton
          fullWidth
          size="small"
          color="primary"
          variant={addedToCart ? 'outlined' : 'contained'}
          onClick={onAddToCart}
        >
          {addedToCart ? 'Remove' : 'Add'}
        </FetchButton>
      </Card>
    );
  }
);

ProductItem.displayName = 'ProductItem';

export default ProductItem;
