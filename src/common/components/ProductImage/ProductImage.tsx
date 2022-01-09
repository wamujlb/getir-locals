import React from 'react';
import { useStyles } from './style';

export type ProductImageProps = {
  productTitle: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const ProductImage = React.memo(
  ({ productTitle, ...rest }: ProductImageProps) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <img {...rest} alt={productTitle} className={classes.image} />
      </div>
    );
  }
);

ProductImage.displayName = 'ProductImage';

export default ProductImage;
