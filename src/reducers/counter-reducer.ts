import { state, StateType } from '../data/state';

export type IncrementCounterACType = ReturnType<typeof incrementCounterAC>;
export type ResetCounterACType = ReturnType<typeof resetCounterAC>;
export type ToggleIncrementDisabledACType = ReturnType<typeof toggleIncrementDisabledAC>;
export type ToggleResetDisabledACType = ReturnType<typeof toggleResetDisabledAC>;

type ActionsType =
  | IncrementCounterACType
  | ResetCounterACType
  | ToggleResetDisabledACType
  | ToggleIncrementDisabledACType;
const initialState: StateType = state;

export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, currentVal: action.payload.currentVal + 1 };
    case 'RESET_COUNTER':
      return { ...state, currentVal: state.startVal };
    case 'TOGGLE_INCREMENT_DISABLED':
      return { ...state, incDisabled: action.payload.disabledVal };
    case 'TOGGLE_RESET_DISABLED':
      return { ...state, resetDisabled: action.payload.disabledVal };
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

export const resetCounterAC = () => {
  return {
    type: 'RESET_COUNTER',
  } as const;
};

export const toggleIncrementDisabledAC = (disabledVal: boolean) => {
  return {
    type: 'TOGGLE_INCREMENT_DISABLED',
    payload: { disabledVal },
  } as const;
};

export const toggleResetDisabledAC = (disabledVal: boolean) => {
  return {
    type: 'TOGGLE_RESET_DISABLED',
    payload: { disabledVal },
  } as const;
};
