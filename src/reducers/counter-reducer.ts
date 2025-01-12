import { counterState, CounterStateType } from '../data/state';
import { SetSettingsACType } from './settings-reducer';

export type IncrementCounterACType = ReturnType<typeof incrementCounterAC>;
export type ResetCounterACType = ReturnType<typeof resetCounterAC>;

type ActionsType = IncrementCounterACType | ResetCounterACType | SetSettingsACType;

const initialState: CounterStateType = counterState;

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType
): CounterStateType => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, currentVal: action.payload.currentVal + 1 };
    case 'RESET_COUNTER':
      return { ...state, currentVal: action.payload.startVal };
    case 'SET_SETTINGS':
      return { ...state, currentVal: action.payload.startVal };
    default:
      return state;
  }
};

export const incrementCounterAC = (currentVal: number) => {
  return {
    type: 'INCREMENT_COUNTER',
    payload: { currentVal },
  } as const;
};

export const resetCounterAC = (startVal: number) => {
  return {
    type: 'RESET_COUNTER',
    payload: { startVal },
  } as const;
};
