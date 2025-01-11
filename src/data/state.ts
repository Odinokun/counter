export type SettingsStateType = {
  maxVal: number;
  startVal: number;
  settingsBtnDisabled: boolean;
};

export type CounterStateType = {
  currentVal: number;
  incBtnDisabled: boolean;
  resetBtnDisabled: boolean;
};

export const settingsState: SettingsStateType = {
  maxVal: 5,
  startVal: 0,
  settingsBtnDisabled: true,
};

export const counterState: CounterStateType = {
  currentVal: 0,
  incBtnDisabled: false,
  resetBtnDisabled: true,
};
