import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../../data/store';
import { CounterStateType, SettingsStateType } from '../../data/state';
import { incrementCounterAC, resetCounterAC } from '../../reducers/counter-reducer';

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

  return (
    <Box className={s.counter}>
      <Box className={s.counterBody}>
        {settings.settingsMode ? (
          <Typography
            sx={settings.errorMode ? { color: 'tomato' } : null}
            className={s.counterNumber}
            variant='h5'
            component='h2'
          >
            {settings.errorMode ? 'Set correct value!' : 'Press set to change settings'}
          </Typography>
        ) : (
          <Typography
            sx={counter.currentVal >= settings.maxVal ? { color: 'tomato' } : null}
            className={s.counterNumber}
            variant='h2'
            component='h2'
          >
            {counter.currentVal}
          </Typography>
        )}
      </Box>
      <Box className={s.counterFooter}>
        <Btn
          name='+1'
          onClick={incrementVal}
          disabled={counter.currentVal >= settings.maxVal || settings.settingsMode}
        />
        <Btn
          name='Reset'
          onClick={resetCounter}
          disabled={counter.currentVal === settings.startVal || settings.settingsMode}
        />
      </Box>
    </Box>
  );
};
