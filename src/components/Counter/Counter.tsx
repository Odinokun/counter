import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppRootStateType } from '../../data/store';
import { CounterStateType, incrementCounterAC } from '../../reducers/counter-reducer';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Btn } from '../Btn/Btn';
import s from './Counter.module.css';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const counter = useSelector<AppRootStateType, CounterStateType>(state => state.counter);
  const incrementVal = () => dispatch(incrementCounterAC(counter.startVal));

  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        <Typography className={s.counterNumber} variant='h2' component='h2'>
          {counter.startVal}
        </Typography>
      </Box>
      <Box className={s.counterFooter}>
        <Btn name='+1' onClick={incrementVal} disabled={false} />
        <Btn name='Reset' onClick={() => console.log('reset')} disabled />
      </Box>
    </Box>
  );
};
