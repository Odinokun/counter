import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { InfoContainer } from './Info.styles.ts';

interface IProps {
  counterValue: number;
  setCounterValue: (value: number) => void;
  maxValue: number;
}

export const Info: FC<IProps> = ({
  counterValue,
  setCounterValue,
  maxValue,
}) => {
  const addCounter = () => setCounterValue(++counterValue);
  const clearCounter = () => setCounterValue(0);
  
  return (
    <Grid item xs={12} sm={6}>
      <InfoContainer>
        <Typography
          sx={counterValue >= maxValue ? { color: 'tomato' } : { color: 'black' }}
          variant="h4"
          align="center"
        >
          {counterValue}
        </Typography>
      </InfoContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Add"
            onClick={addCounter}
            fullWidth
            size="large"
            variant="contained"
            disabled={counterValue >= maxValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Clear"
            onClick={clearCounter}
            fullWidth
            size="large"
            variant="contained"
            disabled={counterValue <= 0}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};