import { beforeEach, expect, test } from 'vitest';
import {
  counterReducer,
  incrementCounterAC,
  IncrementCounterACType,
  resetCounterAC,
  ResetCounterACType,
} from './counter-reducer';
import { CounterStateType } from '../data/state';
import { setSettingsAC, SetSettingsACType } from './settings-reducer';

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    currentVal: 333,
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

test('current counter value must be equal to start value', () => {
  const action: SetSettingsACType = setSettingsAC(200, 100);
  const endState: CounterStateType = counterReducer(initialState, action);
  expect(endState.currentVal).toBe(100);
});
