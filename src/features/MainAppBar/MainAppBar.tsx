import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';

import AppLogo from 'common/components/AppLogo/AppLogo';
import { useStyles } from './style';
import AppBarShoppingCart from 'common/components/AppBarShoppingCart/AppBarShoppingCart';

const MainAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            md={9}
            container
            gridColumn={9}
            className={classes.toolbarLeft}
          >
            <Grid item container md={6} alignItems="center">
              <AppLogo className={classes.logo} />
            </Grid>
          </Grid>

          <Grid item xs={8} md={3} className={classes.toolbarRight}>
            <AppBarShoppingCart value={112123.1154} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

MainAppBar.displayName = 'MainAppBar';

export default MainAppBar;
