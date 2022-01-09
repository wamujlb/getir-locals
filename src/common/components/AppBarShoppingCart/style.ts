import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 0,
      height: 48,
      [theme.breakpoints.up('sm')]: {
        height: 76,
        padding: theme.spacing(2, 3),
      },
    },
  })
);
