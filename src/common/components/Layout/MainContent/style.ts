import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 48,
      paddingBottom: theme.spacing(14),
      [theme.breakpoints.up('sm')]: {
        paddingTop: 76,
      },
    },
  })
);
