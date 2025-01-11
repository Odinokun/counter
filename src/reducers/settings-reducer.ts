import { settingsState, SettingsStateType } from '../data/state';

export type SetSettingsACType = ReturnType<typeof setSettingsAC>;
export type SettingsBtnDisabledACType = ReturnType<typeof settingsBtnDisabledAC>;
type ActionsType = SetSettingsACType | SettingsBtnDisabledACType;

const initialState: SettingsStateType = settingsState;

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionsType
): SettingsStateType => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return { ...state, maxVal: action.payload.maxVal, startVal: action.payload.startVal };
    case 'SET_BTN_DISABLED':
      return { ...state, settingsBtnDisabled: action.payload.disabledVal };
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

export const settingsBtnDisabledAC = (disabledVal: boolean) => {
  return {
    type: 'SET_BTN_DISABLED',
    payload: { disabledVal },
  } as const;
};
