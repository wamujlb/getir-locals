import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded';
import { Hidden, Typography } from '@mui/material';

const PaginationNext = () => {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
      <Hidden lgDown>Next</Hidden> <ArrowForwardIcon />
    </Typography>
  );
};

PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;
