import { FC, useState } from 'react';

import { Counter } from './components/Counter/Counter';
import { StyledContainer } from './App.styles.ts';

export const App: FC = () => {
  const [startValue, setStartValue] = useState<number>(2);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [counterValue, setCounterValue] = useState<number>(startValue);
  
  return (
    <StyledContainer fixed>
      <Counter
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        startValue={startValue}
        setStartValue={setStartValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
    </StyledContainer>
  );
};
