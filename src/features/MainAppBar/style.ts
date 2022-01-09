import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: 80,
      [theme.breakpoints.up('md')]: {
        width: 140,
      },
    },
    toolbarLeft: {
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
      },
    },
    toolbarRight: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);
