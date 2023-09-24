import { FC } from 'react';
import { Grid } from '@mui/material';

import { Info } from '../Info/Info.tsx';
import { Settings } from '../Settings/Settings.tsx';

interface IProps {
  counterValue: number;
  setCounterValue: (value: number) => void;
}

export const Counter: FC<IProps> = () => {
  return (
    <Grid container spacing={ 3 }>
      <Settings/>
      <Info/>
    </Grid>
  );
};
