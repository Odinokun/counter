import { beforeEach, expect, test } from 'vitest';
import { counterReducer, CounterStateType, incrementCounterAC, IncrementCounterACType } from './counter-reducer';

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    maxVal: 5,
    startVal: 0,
  };
});

test('counter must be increment for 1', () => {
  const action: IncrementCounterACType = incrementCounterAC(0);
  const endState: CounterStateType = counterReducer(initialState, action);

  expect(endState.startVal).toBe(1);
});
