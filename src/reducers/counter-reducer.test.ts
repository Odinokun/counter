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
import { CounterStateType } from '../data/state';
import { setSettingsAC, SetSettingsACType } from './settings-reducer';

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    currentVal: 333,
    incBtnDisabled: false,
    resetBtnDisabled: false,
  };
});

test('counter current value must be increment for 1', () => {
  const action: IncrementCounterACType = incrementCounterAC(0);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.currentVal).toBe(1);
});

test('counter current value must be reset to start value', () => {
  const action: ResetCounterACType = resetCounterAC(4);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.currentVal).toBe(4);
});

test('increment btn must be disabled', () => {
  const action: IncrementBtnDisabledACType = incrementBtnDisabledAC(true);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.incBtnDisabled).toBeTruthy();
});

test('reset btn must be disabled', () => {
  const action: ResetBtnDisabledACType = resetBtnDisabledAC(true);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.resetBtnDisabled).toBeTruthy();
});

// TODO is it correct place to the test?
test('current counter value must be equal to start value', () => {
  const action: SetSettingsACType = setSettingsAC(200, 100);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.currentVal).toBe(100);
});
