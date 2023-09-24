import { FC, useState } from 'react';
import { Container } from '@mui/material';

import { Counter } from './components/Counter/Counter';

export const App: FC = () => {
  const [counterValue, setCounterValue] = useState<number>(0);

  return (
    <Container fixed style={ { padding: '20px 0' } }>
      <Counter counterValue={ counterValue } setCounterValue={ setCounterValue }/>
    </Container>
  );
};
