import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SettingsStateType } from '../../data/state';
import { AppRootStateType } from '../../data/store';
import {
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
    const isDisabled = maxVal === settings.maxVal && startVal === settings.startVal;
    dispatch(settingsBtnDisabledAC(isDisabled));
    dispatch(settingsModeAC(!isDisabled));
    dispatch(resetBtnDisabledAC(!isDisabled));
  }, [maxVal, settings.maxVal, startVal, settings.startVal, dispatch]);

  const setSettings = () => dispatch(setSettingsAC(maxVal, startVal));

  return (
    <Box className={s.settings}>
      <Box>
        <Input label='Max value' value={settings.maxVal} onChange={setMaxVal} />
        <Input label='Start value' value={settings.startVal} onChange={setStartVal} />
      </Box>
      <Box className={s.settingsFooter}>
        <Btn name='Set' onClick={setSettings} disabled={settings.settingsBtnDisabled} />
      </Box>
    </Box>
  );
};
