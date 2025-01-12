import { beforeEach, expect, test } from 'vitest';
import { SettingsStateType } from '../data/state';
import {
  errorModeAC,
  ErrorModeACType,
  setSettingsAC,
  SetSettingsACType,
  settingsBtnDisabledAC,
  SettingsBtnDisabledACType,
  settingsModeAC,
  SettingsModeACType,
  settingsReducer,
} from './settings-reducer';

let initialState: SettingsStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 0,
    settingsBtnDisabled: false,
    settingsMode: false,
    errorMode: false,
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

test('settings mode must be enabled', () => {
  const action: SettingsModeACType = settingsModeAC(true);
  const endState: SettingsStateType = settingsReducer(initialState, action);
  expect(endState.settingsMode).toBeTruthy();
});

test('error mode must be enabled', () => {
  const action: ErrorModeACType = errorModeAC(true);
  const endState: SettingsStateType = settingsReducer(initialState, action);
  expect(endState.errorMode).toBeTruthy();
});
