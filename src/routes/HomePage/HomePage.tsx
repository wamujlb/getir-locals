import React from 'react';
import { Grid, Typography } from '@mui/material';

import MainAppBar from 'features/MainAppBar/MainAppBar';
import MainContent from 'common/components/Layout/MainContent/MainContent';
import ProductFilters from 'features/ProductFilters/ProductFilters';
import ProductResults from 'features/ProductResults/ProductResults';
import Footer from 'common/components/Layout/Footer/Footer';
import ShoppingCart from 'features/ShoppingCart/ShoppingCart';

const HomePage = () => {
  return (
    <>
      <MainAppBar />

      <MainContent>
        <Grid container sx={{ pt: 5 }} spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <ProductFilters />
          </Grid>

          <Grid item xs={12} sm={8} md={6}>
            <Typography sx={{ mb: 2 }}>Products</Typography>

            <ProductResults />
          </Grid>

          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </MainContent>

      <Footer />
    </>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
