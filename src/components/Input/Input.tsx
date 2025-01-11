import { ChangeEvent, FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import s from './Input.module.css';

type PropsType = {
  label: string;
  value: number;
  onChange: (val: number) => void;
};

export const Input: FC<PropsType> = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState<number>(value);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.currentTarget.value);
    onChange(+e.currentTarget.value);
  };

  return (
    <Box className={s.input}>
      <Typography variant='button' component='span' className={s.inputLabel}>
        {label}
      </Typography>
      <TextField
        onChange={onChangeHandler}
        label={label}
        variant='outlined'
        value={inputValue}
        type='number'
      />
    </Box>
  );
};
