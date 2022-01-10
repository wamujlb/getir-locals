import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { useStyles } from './style';

export type ProductFilterCardProps = {
  title: string;
  children: React.ReactNode;
};

const ProductFilterCard = React.memo(
  ({ title, children }: ProductFilterCardProps) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="body2" className={classes.title}>
          {title}
        </Typography>

        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    );
  }
);

ProductFilterCard.displayName = 'ProductFilterCard';

export default ProductFilterCard;
