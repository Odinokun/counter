import { counterState, CounterStateType } from '../data/state';
import { SetSettingsACType } from './settings-reducer';

export type IncrementCounterACType = ReturnType<typeof incrementCounterAC>;
export type ResetCounterACType = ReturnType<typeof resetCounterAC>;
export type IncrementBtnDisabledACType = ReturnType<typeof incrementBtnDisabledAC>;
export type ResetBtnDisabledACType = ReturnType<typeof resetBtnDisabledAC>;

type ActionsType =
  | IncrementCounterACType
  | ResetCounterACType
  | IncrementBtnDisabledACType
  | ResetBtnDisabledACType
  | SetSettingsACType;

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
    case 'INCREMENT_BTN_DISABLED':
      return { ...state, incBtnDisabled: action.payload.disabledVal };
    case 'RESET_BTN_DISABLED':
      return { ...state, resetBtnDisabled: action.payload.disabledVal };
    // TODO Где я должен писать тест для этого action
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

export const incrementBtnDisabledAC = (disabledVal: boolean) => {
  return {
    type: 'INCREMENT_BTN_DISABLED',
    payload: { disabledVal },
  } as const;
};

export const resetBtnDisabledAC = (disabledVal: boolean) => {
  return {
    type: 'RESET_BTN_DISABLED',
    payload: { disabledVal },
  } as const;
};
