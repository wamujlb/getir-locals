import React from 'react';
import { Box, BoxProps, CircularProgress } from '@mui/material';

export type ContentBackdropLoaderProps = {} & BoxProps;

const ContentBackdropLoader = React.forwardRef(
  (props: ContentBackdropLoaderProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Box
        {...props}
        ref={ref}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 100,
          background: 'rgba(255,255,255,.3)',
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }
);

ContentBackdropLoader.displayName = 'ContentBackdropLoader';

export default ContentBackdropLoader;
