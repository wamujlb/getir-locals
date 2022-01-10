import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderWidth: theme.spacing(1),
      borderColor: theme.palette.primary.main,
    },
  })
);
