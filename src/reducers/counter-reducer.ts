import { appState, AppStateType } from '../data/state';
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

const initialState: AppStateType = appState;

export const counterReducer = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, currentVal: action.payload.currentVal + 1 };
    case 'RESET_COUNTER':
      return { ...state, currentVal: state.startVal };
    case 'INCREMENT_BTN_DISABLED':
      return { ...state, incBtnDisabled: action.payload.disabledVal };
    case 'RESET_BTN_DISABLED':
      return { ...state, resetBtnDisabled: action.payload.disabledVal };
    //TODO add tests
    case 'SET_SETTINGS':
      return {
        ...state,
        maxVal: action.payload.maxVal,
        startVal: action.payload.startVal,
        currentVal: action.payload.startVal,
      };
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
