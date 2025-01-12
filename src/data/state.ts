export type SettingsStateType = {
  maxVal: number;
  startVal: number;
  settingsBtnDisabled: boolean;
  settingsMode: boolean;
  errorMode: boolean;
};
export const settingsState: SettingsStateType = {
  maxVal: 5,
  startVal: 0,
  // TODO Нужны ли состояния для кнопок?
  settingsBtnDisabled: true,
  settingsMode: false,
  errorMode: false,
};

export type CounterStateType = {
  currentVal: number;
  incBtnDisabled: boolean;
  resetBtnDisabled: boolean;
};
export const counterState: CounterStateType = {
  currentVal: 0,
  incBtnDisabled: false,
  // TODO Нужны ли состояния для кнопок?
  resetBtnDisabled: true,
};
