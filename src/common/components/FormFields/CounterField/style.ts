import { Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 'none',
    },
    input: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      width: 32,
      height: 32,
      textAlign: 'center',
      border: 'none',
      outline: 'none',
      cursor: 'default',
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&[type=number]': {
        'moz-appearance': 'textfield',
      },
    },
  })
);
