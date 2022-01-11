import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import AppLogo from 'common/components/AppLogo/AppLogo';
import AppBarShoppingCart from 'common/components/AppBarShoppingCart/AppBarShoppingCart';
import { useElevationScroll } from 'common/hooks/useElevationScroll';
import { selectShoppingCartTotalPrice } from 'features/ShoppingCart/shoppingCart.slice';
import { useStyles } from './style';

const MainAppBar = () => {
  const classes = useStyles();
  const elevation = useElevationScroll();
  const totalPrice = useSelector(selectShoppingCartTotalPrice);

  return (
    <AppBar position="fixed" elevation={elevation}>
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
            <AppBarShoppingCart value={totalPrice} />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

MainAppBar.displayName = 'MainAppBar';

export default MainAppBar;
