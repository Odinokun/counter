import { FC } from 'react';

import { Info } from '../Info/Info.tsx';
import { Settings } from '../Settings/Settings.tsx';
import { CounterGrid } from './Counter.styles.ts';

interface IProps {
  counterValue: number;
  setCounterValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
}

export const Counter: FC<IProps> = ({
  counterValue,
  setCounterValue,
  maxValue,
  setMaxValue,
}) => {
  return (
    <CounterGrid container spacing={3}>
      <Settings
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <Info
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        maxValue={maxValue}
      />
    </CounterGrid>
  );
};
