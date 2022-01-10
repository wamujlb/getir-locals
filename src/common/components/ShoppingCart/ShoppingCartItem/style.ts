import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(1),
      paddingRight: 0,
    },
    secondaryAction: {
      right: 0,
      background: 'black',
    },
  })
);
