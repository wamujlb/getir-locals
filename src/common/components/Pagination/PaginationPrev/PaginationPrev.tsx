import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBackRounded';
import { Hidden, Typography } from '@mui/material';

const PaginationPrev = () => {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
      <ArrowBackIcon /> <Hidden lgDown>Prev</Hidden>
    </Typography>
  );
};

PaginationPrev.displayName = 'PaginationPrev';

export default PaginationPrev;
