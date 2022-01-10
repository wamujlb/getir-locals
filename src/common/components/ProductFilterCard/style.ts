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
      color: '#697488',
      marginBottom: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);
