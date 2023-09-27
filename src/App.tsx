import { FC, useState } from 'react';

import { Counter } from './components/Counter/Counter';
import { StyledContainer } from './App.styles.ts';

export const App: FC = () => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [counterValue, setCounterValue] = useState<number>(minValue);
  
  return (
    <StyledContainer fixed>
      <Counter
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        counterValue={counterValue}
        setCounterValue={setCounterValue}
      />
    </StyledContainer>
  );
};
