export type StateType = {
  maxVal: number;
  startVal: number;
  currentVal: number;
  incDisabled: boolean;
  resetDisabled: boolean;
};

export const state: StateType = {
  maxVal: 5,
  startVal: 0,
  currentVal: 0,
  incDisabled: false,
  resetDisabled: true,
};
