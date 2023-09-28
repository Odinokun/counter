import { FC, useState } from 'react';

import { Counter } from './components/Counter/Counter';
import { StyledContainer } from './App.styles.ts';

export const App: FC = () => {
  const startMinValue = localStorage.getItem('minValue') || 0;
  const startMaxValue = localStorage.getItem('maxValue') || 5;
  
  const [minValue, setMinValue] = useState<number>(+startMinValue);
  const [maxValue, setMaxValue] = useState<number>(+startMaxValue);
  
  const [error, setError] = useState<string>('');
  
  return (
    <StyledContainer fixed>
      <Counter
        startMinValue={+startMinValue}
        startMaxValue={+startMaxValue}
        
        minValue={minValue}
        setMinValue={setMinValue}
        
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        
        error={error}
        setError={setError}
      />
    </StyledContainer>
  );
};
