import { FC, useState } from 'react';

import { Counter } from './components/Counter/Counter';
import { StyledContainer } from './App.styles.ts';

export const App: FC = () => {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);

  return (
    <StyledContainer fixed>
      <Counter
        counterValue={ counterValue }
        setCounterValue={ setCounterValue }
        maxValue={ maxValue }
        setMaxValue={ setMaxValue }
      />
    </StyledContainer>
  );
};
