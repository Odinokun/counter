export type AppStateType = {
  maxVal: number;
  startVal: number;
  currentVal: number;
  settingsBtnDisabled: boolean;
  incBtnDisabled: boolean;
  resetBtnDisabled: boolean;
  settingsError: boolean;
};

export const appState: AppStateType = {
  maxVal: 5,
  startVal: 0,
  currentVal: 0,
  settingsBtnDisabled: true,
  incBtnDisabled: false,
  resetBtnDisabled: true,
  settingsError: false,
};
