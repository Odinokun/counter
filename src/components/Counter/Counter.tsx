import { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Btn } from '../Btn/Btn';
import s from './Counter.module.css';

export const Counter: FC = () => {
  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        <Typography className={s.counterNumber} variant='h2' component='h2'>
          0
        </Typography>
      </Box>
      <Box className={s.counterFooter}>
        <Btn name='+1' onClick={() => console.log('+1')} disabled={false} />
        <Btn name='Reset' onClick={() => console.log('reset')} disabled />
      </Box>
    </Box>
  );
};
