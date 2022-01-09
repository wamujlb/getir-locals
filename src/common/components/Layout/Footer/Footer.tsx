import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" py={3}>
          <Typography variant="body2" sx={{ color: 'primary.main' }}>
            ©2019 Market
          </Typography>

          <Typography sx={{ color: 'primary.main', mx: 2 }}>•</Typography>

          <Link
            variant="body2"
            underline="none"
            href="https://getir.com/nl/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </Link>
        </Box>
      </Container>
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
