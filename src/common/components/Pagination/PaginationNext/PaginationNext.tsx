import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardRounded';
import { Typography } from '@mui/material';

const PaginationNext = () => {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }}>
      Next <ArrowForwardIcon />
    </Typography>
  );
};

PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;
