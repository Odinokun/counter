export type SettingsStateType = {
  maxVal: number;
  startVal: number;
  settingsMode: boolean;
  errorMode: boolean;
};
export const settingsState: SettingsStateType = {
  maxVal: 5,
  startVal: 0,
  settingsMode: false,
  errorMode: false,
};

export type CounterStateType = {
  currentVal: number;
};
export const counterState: CounterStateType = {
  currentVal: 0,
};
