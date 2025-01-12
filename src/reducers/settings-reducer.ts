import { settingsState, SettingsStateType } from '../data/state';

export type SetSettingsACType = ReturnType<typeof setSettingsAC>;
export type SettingsModeACType = ReturnType<typeof settingsModeAC>;
export type ErrorModeACType = ReturnType<typeof errorModeAC>;
type ActionsType = SetSettingsACType | SettingsModeACType | ErrorModeACType;

const initialState: SettingsStateType = settingsState;

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionsType
): SettingsStateType => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, maxVal: action.payload.maxVal, startVal: action.payload.startVal };
    case 'SETTINGS_MODE':
      return { ...state, settingsMode: action.payload.value };
    case 'ERROR_MODE':
      return { ...state, errorMode: action.payload.value };
    default:
      return state;
  }
};

export const setSettingsAC = (maxVal: number, startVal: number) => {
  return {
    type: 'SET_SETTINGS',
    payload: { maxVal, startVal },
  } as const;
};

export const settingsModeAC = (value: boolean) => {
  return {
    type: 'SETTINGS_MODE',
    payload: { value },
  } as const;
};

export const errorModeAC = (value: boolean) => {
  return {
    type: 'ERROR_MODE',
    payload: { value },
  } as const;
};
