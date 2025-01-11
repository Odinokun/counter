import { beforeEach, expect, test } from 'vitest';
import { SettingsStateType } from '../data/state';
import {
  setSettingsAC,
  SetSettingsACType,
  settingsBtnDisabledAC,
  SettingsBtnDisabledACType,
  settingsReducer,
} from './settings-reducer';

let initialState: SettingsStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 0,
    settingsBtnDisabled: false,
  };
});

test('max value and start value must be added to state', () => {
  const action: SetSettingsACType = setSettingsAC(77, 22);
  const endState: SettingsStateType = settingsReducer(initialState, action);
  expect(endState.maxVal).toBe(77);
  expect(endState.startVal).toBe(22);
});

test('settings button must be disabled', () => {
  const action: SettingsBtnDisabledACType = settingsBtnDisabledAC(true);
  const endState: SettingsStateType = settingsReducer(initialState, action);
  expect(endState.settingsBtnDisabled).toBeTruthy();
});
