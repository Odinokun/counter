import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsStateType } from '../../data/state';
import { AppRootStateType } from '../../data/store';
import {
  errorModeAC,
  setSettingsAC,
  settingsBtnDisabledAC,
  settingsModeAC,
} from '../../reducers/settings-reducer';

import Box from '@mui/material/Box';
import { Input } from '../Input/Input';
import { Btn } from '../Btn/Btn';
import s from './Settings.module.css';
import { resetBtnDisabledAC } from '../../reducers/counter-reducer';

export const Settings: FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector<AppRootStateType, SettingsStateType>(state => state.settings);

  const [maxVal, setMaxVal] = useState(settings.maxVal);
  const [startVal, setStartVal] = useState(settings.startVal);

  useEffect(() => {
    const settingsMode = maxVal !== settings.maxVal || startVal !== settings.startVal;
    dispatch(settingsModeAC(settingsMode)); // settings mode enabled
    dispatch(settingsBtnDisabledAC(!settingsMode)); // settings button un-disabled
    dispatch(resetBtnDisabledAC(settingsMode)); // reset button disabled
  }, [maxVal, settings.maxVal, startVal, settings.startVal, dispatch]);

  useEffect(() => {
    const errorMode = maxVal <= 0 || maxVal <= startVal || startVal < 0 || startVal >= maxVal;
    dispatch(errorModeAC(errorMode)); // error mode enabled
    dispatch(settingsBtnDisabledAC(errorMode || !settings.settingsMode)); // settings button disabled
  }, [maxVal, startVal, settings.settingsMode, dispatch]);

  const setSettings = () => dispatch(setSettingsAC(maxVal, startVal));

  const maxValError = maxVal <= 0 || maxVal <= startVal;
  const startValError = startVal < 0 || startVal >= maxVal;
  return (
    <Box className={s.settings}>
      <Box>
        <Input
          label='Max value '
          error={maxValError}
          value={settings.maxVal}
          onChange={setMaxVal}
        />
        <Input
          label='Start value'
          error={startValError}
          value={settings.startVal}
          onChange={setStartVal}
        />
      </Box>
      <Box className={s.settingsFooter}>
        <Btn name='Set' onClick={setSettings} disabled={settings.settingsBtnDisabled} />
      </Box>
    </Box>
  );
};
