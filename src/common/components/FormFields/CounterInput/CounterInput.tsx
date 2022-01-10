import React, { useState } from 'react';
import { FormControl, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';

import { useStyles } from './style';

type CounterInputProps = {
  name: string;
  initValue: number;
  onChange?: (name: string, value: number) => void;
};

const CounterInput = React.memo(
  ({ initValue, name, onChange }: CounterInputProps) => {
    const classes = useStyles();
    const [value, setValue] = useState<number>(initValue);

    const onAdd = () => {
      const newValue = value + 1;
      setValue(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };

    const onRemove = () => {
      const newValue = value - 1;
      setValue(newValue);
      if (onChange) {
        onChange(name, newValue);
      }
    };

    return (
      <FormControl className={classes.root}>
        <IconButton size="small" onClick={onRemove} color="primary">
          <RemoveIcon fontSize="small" />
        </IconButton>

        <input
          readOnly
          type="number"
          className={classes.input}
          value={value}
          name={name}
        />

        <IconButton size="small" onClick={onAdd} color="primary">
          <AddIcon fontSize="small" />
        </IconButton>
      </FormControl>
    );
  }
);

CounterInput.displayName = 'CounterInput';

export default CounterInput;
