import { beforeEach, expect, test } from 'vitest';
import {
  counterReducer,
  CounterStateType,
  incrementCounterAC,
  IncrementCounterACType,
  resetCounterAC,
  ResetCounterACType,
  toggleIncrementDisabledAC,
  ToggleIncrementDisabledACType,
  toggleResetDisabledAC,
  ToggleResetDisabledACType,
} from './counter-reducer';

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 0,
    currentVal: 3,
    incDisabled: false,
    resetDisabled: false,
  };
});

test('counter current value must be increment for 1', () => {
  const action: IncrementCounterACType = incrementCounterAC(0);
  const endState: CounterStateType = counterReducer(initialState, action);

  expect(endState.currentVal).toBe(1);
});

test('counter current value must be reset to start value', () => {
  const action: ResetCounterACType = resetCounterAC();
  const endState: CounterStateType = counterReducer(initialState, action);

  expect(endState.currentVal).toBe(0);
});

test('increment btn must be disabled', () => {
  const action: ToggleIncrementDisabledACType = toggleIncrementDisabledAC(true);
  const endState: CounterStateType = counterReducer(initialState, action);

  expect(endState.incDisabled).toBe(true);
});

test('reset btn must be disabled', () => {
  const action: ToggleResetDisabledACType = toggleResetDisabledAC(true);
  const endState: CounterStateType = counterReducer(initialState, action);

  expect(endState.resetDisabled).toBe(true);
});
