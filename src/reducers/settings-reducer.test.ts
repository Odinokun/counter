import { beforeEach, expect, test } from 'vitest';
import { AppStateType } from '../data/state';
import {
  setSettingsAC,
  SetSettingsACType,
  settingsBtnDisabledAC,
  SettingsBtnDisabledACType,
  settingsReducer,
} from './settings-reducer';

let initialState: AppStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 0,
    currentVal: 0,
    settingsBtnDisabled: false,
    incBtnDisabled: false,
    resetBtnDisabled: true,
    settingsError: false,
  };
});

test('max value and start value must be added to state', () => {
  const action: SetSettingsACType = setSettingsAC(77, 22);
  const endState: AppStateType = settingsReducer(initialState, action);

  expect(endState.maxVal).toBe(77);
  expect(endState.startVal).toBe(22);
});

test('settings button must be disabled', () => {
  const action: SettingsBtnDisabledACType = settingsBtnDisabledAC(true);
  const endState: AppStateType = settingsReducer(initialState, action);

  expect(endState.settingsBtnDisabled).toBeTruthy();
});
