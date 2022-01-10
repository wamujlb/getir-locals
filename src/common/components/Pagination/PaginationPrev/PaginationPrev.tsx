import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBackRounded';
import { Typography } from '@mui/material';

const PaginationPrev = () => {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
      <ArrowBackIcon /> Prev
    </Typography>
  );
};

PaginationPrev.displayName = 'PaginationPrev';

export default PaginationPrev;
