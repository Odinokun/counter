export type IncrementCounterACType = ReturnType<typeof incrementCounterAC>;

type ActionsType = IncrementCounterACType;

export type CounterStateType = {
  maxVal: number;
  startVal: number;
};

const initialState: CounterStateType = {
  maxVal: 5,
  startVal: 0,
};

export const counterReducer = (
  state: CounterStateType = initialState,
  action: ActionsType
): CounterStateType => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, startVal: action.payload.currentVal + 1 };
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
