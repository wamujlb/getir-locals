import React from 'react';
import { PaginationItem, PaginationItemProps, styled } from '@mui/material';

const StyledPaginationItem = styled(PaginationItem)<PaginationItemProps>(
  ({ theme }) => ({
    color: theme.palette.text.secondary,
    '&.MuiButtonBase-root': {
      height: 40,
    },
    '&.MuiPaginationItem-previousNext': {
      '&:first-child': {
        marginRight: theme.spacing(4),
      },
      '&:last-child': {
        marginLeft: theme.spacing(4),
      },
    },
  })
);

export default StyledPaginationItem;
