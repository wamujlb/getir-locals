import { Card, Skeleton } from '@mui/material';
import React from 'react';

const ProductItemSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width="100%" sx={{ pt: '100%', mb: 1 }} />

      <Skeleton width="40%" height={18} />

      <Skeleton height={18} />

      <Skeleton width="20%" height={18} />

      <Skeleton height={40} />
    </Card>
  );
};

ProductItemSkeleton.displayName = 'ProductItemSkeleton';

export default ProductItemSkeleton;
