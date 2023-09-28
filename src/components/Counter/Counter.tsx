import { FC } from 'react';

import { Info } from '../Info/Info.tsx';
import { Settings } from '../Settings/Settings.tsx';
import { CounterGrid } from './Counter.styles.ts';

interface IProps {
  startMinValue: number;
  startMaxValue: number;
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
  error: string | null;
  setError: (value: string) => void;
}

export const Counter: FC<IProps> = ({
  startMinValue,
  startMaxValue,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  error,
  setError,
}) => {
  return (
    <CounterGrid container spacing={3}>
      <Settings
        startMinValue={startMinValue}
        startMaxValue={startMaxValue}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        error={error}
        setError={setError}
      />
      <Info
        startMinValue={startMinValue}
        startMaxValue={startMaxValue}
        error={error}
      />
    </CounterGrid>
  );
};
