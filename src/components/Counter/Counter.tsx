import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRootStateType } from '../../data/store';
import { useSelector } from 'react-redux';
import {
  incrementCounterAC,
  resetCounterAC,
  toggleIncrementDisabledAC,
  toggleResetDisabledAC,
} from '../../reducers/counter-reducer';
import { StateType } from '../../data/state';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Btn } from '../Btn/Btn';

import s from './Counter.module.css';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const counter = useSelector<AppRootStateType, StateType>(state => state.counter);

  const incrementVal = () => dispatch(incrementCounterAC(counter.currentVal));
  const resetVal = () => dispatch(resetCounterAC());

  // increment button toggle disabled
  useEffect(() => {
    if (counter.currentVal >= counter.maxVal) {
      dispatch(toggleIncrementDisabledAC(true));
    } else {
      dispatch(toggleIncrementDisabledAC(false));
    }
  }, [counter.currentVal, counter.maxVal, dispatch]);

  // reset button toggle disabled
  useEffect(() => {
    if (counter.currentVal === counter.startVal) {
      dispatch(toggleResetDisabledAC(true));
    } else {
      dispatch(toggleResetDisabledAC(false));
    }
  }, [counter.currentVal, counter.startVal, dispatch]);

  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        <Typography className={s.counterNumber} variant='h2' component='h2'>
          {counter.currentVal}
        </Typography>
      </Box>
      <Box className={s.counterFooter}>
        <Btn name='+1' onClick={incrementVal} disabled={counter.incDisabled} />
        <Btn name='Reset' onClick={resetVal} disabled={counter.resetDisabled} />
      </Box>
    </Box>
  );
};
