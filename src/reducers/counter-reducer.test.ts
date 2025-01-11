import { beforeEach, expect, test } from 'vitest';
import {
  counterReducer,
  incrementBtnDisabledAC,
  IncrementBtnDisabledACType,
  incrementCounterAC,
  IncrementCounterACType,
  resetBtnDisabledAC,
  ResetBtnDisabledACType,
  resetCounterAC,
  ResetCounterACType,
} from './counter-reducer';
import { AppStateType } from '../data/state';

let initialState: AppStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 22,
    currentVal: 333,
    settingsBtnDisabled: true,
    incBtnDisabled: false,
    resetBtnDisabled: true,
    settingsError: false,
  };
});

test('counter current value must be increment for 1', () => {
  const action: IncrementCounterACType = incrementCounterAC(0);
  const endState: AppStateType = counterReducer(initialState, action);

  expect(endState.currentVal).toBe(1);
});

test('counter current value must be reset to start value', () => {
  const action: ResetCounterACType = resetCounterAC();
  const endState: AppStateType = counterReducer(initialState, action);

  expect(endState.currentVal).toBe(22);
});

test('increment btn must be disabled', () => {
  const action: IncrementBtnDisabledACType = incrementBtnDisabledAC(true);
  const endState: AppStateType = counterReducer(initialState, action);

  expect(endState.incBtnDisabled).toBeTruthy();
});

test('reset btn must be disabled', () => {
  const action: ResetBtnDisabledACType = resetBtnDisabledAC(true);
  const endState: AppStateType = counterReducer(initialState, action);

  expect(endState.resetBtnDisabled).toBeTruthy();
});
