import React, { useState } from 'react';
import { FormControl, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';

import { useStyles } from './style';

type CounterProps = {
  name: string;
  initValue?: number;
  onChange?: (name: string, value: number) => void;
};

const Counter = React.memo(
  ({ initValue = 0, name, onChange }: CounterProps) => {
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
        <IconButton
          size="small"
          onClick={onRemove}
          color="primary"
          aria-label="Decrease count"
        >
          <RemoveIcon fontSize="small" />
        </IconButton>

        <input
          readOnly
          type="number"
          className={classes.input}
          value={value}
          name={name}
        />

        <IconButton
          size="small"
          onClick={onAdd}
          color="primary"
          aria-label="Increase count"
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </FormControl>
    );
  }
);

Counter.displayName = 'Counter';

export default Counter;
