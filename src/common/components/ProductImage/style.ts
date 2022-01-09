import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      border: '1px solid #F3F0FE',
      borderRadius: 12,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2),
      },
    },
    image: {
      display: 'block',
      maxWidth: '100%',
    },
  })
);
