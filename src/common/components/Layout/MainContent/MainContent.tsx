import React from 'react';
import { Container, ContainerProps } from '@mui/material';
import { useStyles } from './style';

type MainContentProps = {
  children?: React.ReactNode;
} & ContainerProps;

const MainContent = ({ children, ...containerProps }: MainContentProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root} {...containerProps}>
      {children}
    </Container>
  );
};

MainContent.displayName = 'MainContent';

export default MainContent;
