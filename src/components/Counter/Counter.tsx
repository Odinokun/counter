import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../data/store';
import { AppStateType } from '../../data/state';
import {
  incrementBtnDisabledAC,
  incrementCounterAC,
  resetBtnDisabledAC,
  resetCounterAC,
} from '../../reducers/counter-reducer';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Btn } from '../Btn/Btn';

import s from './Counter.module.css';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const counter = useSelector<AppRootStateType, AppStateType>(state => state.counter);

  const incrementVal = () => dispatch(incrementCounterAC(counter.currentVal));
  const resetVal = () => dispatch(resetCounterAC());

  // increment button toggle disabled
  useEffect(() => {
    const isDisabled = counter.currentVal >= counter.maxVal;
    dispatch(incrementBtnDisabledAC(isDisabled));
  }, [counter.currentVal, counter.maxVal, dispatch]);

  // reset button toggle disabled
  useEffect(() => {
    const isDisabled = counter.currentVal === counter.startVal;
    dispatch(resetBtnDisabledAC(isDisabled));
  }, [counter.currentVal, counter.startVal, dispatch]);

  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        <Typography className={s.counterNumber} variant='h2' component='h2'>
          {counter.currentVal}
        </Typography>
      </Box>
      <Box className={s.counterFooter}>
        <Btn name='+1' onClick={incrementVal} disabled={counter.incBtnDisabled} />
        <Btn name='Reset' onClick={resetVal} disabled={counter.resetBtnDisabled} />
      </Box>
    </Box>
  );
};
