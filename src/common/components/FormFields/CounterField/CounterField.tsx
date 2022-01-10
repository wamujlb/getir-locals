import React from 'react';
import { FormControl, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';
import { useField } from 'formik';

import { useStyles } from './style';

type CounterFieldProps = {
  name: string;
};

const CounterField = React.memo(({ name }: CounterFieldProps) => {
  const classes = useStyles();
  const [field, , fieldHelpers] = useField<number>(name);

  const onAdd = () => {
    fieldHelpers.setValue(field.value + 1);
  };

  const onRemove = () => {
    fieldHelpers.setValue(field.value - 1);
  };

  return (
    <FormControl className={classes.root}>
      <IconButton size="small" onClick={onRemove} color="primary">
        <RemoveIcon fontSize="small" />
      </IconButton>

      <input readOnly type="number" className={classes.input} {...field} />

      <IconButton size="small" onClick={onAdd} color="primary">
        <AddIcon fontSize="small" />
      </IconButton>
    </FormControl>
  );
});

CounterField.displayName = 'CounterField';

export default CounterField;
