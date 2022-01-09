import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ShoppingCartIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M3.9,7.8h16.2V22H3.9V7.8z M9.1,1.9h5.8L16,3.1v4.7l-1.2,0V3.1H9.2v4.7L8,7.8V3.1L9.1,1.9z" />
    </SvgIcon>
  );
};

ShoppingCartIcon.displayName = 'ShoppingCartIcon';

export default ShoppingCartIcon;
