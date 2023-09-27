import { FC } from 'react';

import { Info } from '../Info/Info.tsx';
import { Settings } from '../Settings/Settings.tsx';
import { CounterGrid } from './Counter.styles.ts';

interface IProps {
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  counterValue: number;
  setCounterValue: (value: number) => void;
}

export const Counter: FC<IProps> = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}) => {
  return (
    <CounterGrid container spacing={3}>
      <Settings
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <Info
      
      />
    </CounterGrid>
  );
};
