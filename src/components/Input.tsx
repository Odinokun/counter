import { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

type PropsType = {
  label: string;
};

export const Input: FC<PropsType> = ({ label }) => {
  return (
    <Box>
      <Typography variant='button' component='span'>
        {label}
      </Typography>
      <TextField id='outlined-basic' label={label} variant='outlined' value={0} type='number' />
    </Box>
  );
};
