import { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import s from './Input.module.css';

type PropsType = {
  label: string;
};

export const Input: FC<PropsType> = ({ label }) => {
  return (
    <Box className={s.input}>
      <Typography variant='button' component='span' className={s.inputLabel}>
        {label}
      </Typography>
      <TextField label={label} variant='outlined' value={0} type='number' />
    </Box>
  );
};
