import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& + $root': {
        marginTop: theme.spacing(3),
      },
    },
    title: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightMedium,
    },
    price: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);
