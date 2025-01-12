import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../data/store';
import { CounterStateType, SettingsStateType } from '../../data/state';
import {
  incrementBtnDisabledAC,
  incrementCounterAC,
  resetBtnDisabledAC,
  resetCounterAC,
} from '../../reducers/counter-reducer';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Btn } from '../Btn/Btn';

import s from './Counter.module.css';

export const Counter: FC = () => {
  const dispatch = useDispatch();

  const counter = useSelector<AppRootStateType, CounterStateType>(state => state.counter);
  const settings = useSelector<AppRootStateType, SettingsStateType>(state => state.settings);

  const incrementVal = () => dispatch(incrementCounterAC(counter.currentVal));
  const resetCounter = () => dispatch(resetCounterAC(settings.startVal));

  // increment button toggle disabled
  useEffect(() => {
    const isDisabled = counter.currentVal >= settings.maxVal || settings.settingsMode;
    dispatch(incrementBtnDisabledAC(isDisabled));
  }, [counter.currentVal, settings.maxVal, settings.settingsMode, dispatch]);

  // reset button toggle disabled
  useEffect(() => {
    const isDisabled = counter.currentVal === settings.startVal;
    dispatch(resetBtnDisabledAC(isDisabled));
  }, [counter.currentVal, settings.startVal, dispatch]);

  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        {settings.settingsMode ? (
          <Typography
            sx={settings.errorMode ? { color: 'red' } : null}
            className={s.counterNumber}
            variant='h5'
            component='h2'
          >
            {settings.errorMode ? 'Set correct value!' : 'Press set to change settings'}
          </Typography>
        ) : (
          <Typography
            sx={counter.currentVal >= settings.maxVal ? { color: 'red' } : null}
            className={s.counterNumber}
            variant='h2'
            component='h2'
          >
            {counter.currentVal}
          </Typography>
        )}
      </Box>
      <Box className={s.counterFooter}>
        <Btn name='+1' onClick={incrementVal} disabled={counter.incBtnDisabled} />
        <Btn name='Reset' onClick={resetCounter} disabled={counter.resetBtnDisabled} />
      </Box>
    </Box>
  );
};
