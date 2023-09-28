import { FC, useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { InfoContainer } from './Info.styles.ts';

interface IProps {
  startMinValue: number;
  startMaxValue: number;
  error: string;
}

export const Info: FC<IProps> = ({
  startMinValue,
  startMaxValue,
}) => {
  const [counterValue, setCounterValue] = useState<number>(startMinValue);
  
  const onAddHandler = () => {
    counterValue < startMaxValue && setCounterValue(counterValue + 1);
  };
  
  const onClearHandler = () => {
    counterValue > startMinValue && setCounterValue(startMinValue);
  };
  
  return (
    <Grid item xs={12} sm={6}>
      <InfoContainer>
        <Typography
          variant="h4"
          align="center"
          sx={counterValue >= startMaxValue ? { color: 'tomato' } : {}}
        >
          {counterValue}
        </Typography>
      </InfoContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Add"
            fullWidth
            size="large"
            variant="contained"
            onClick={onAddHandler}
            disabled={counterValue >= startMaxValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Clear"
            fullWidth
            size="large"
            variant="contained"
            onClick={onClearHandler}
            disabled={counterValue === startMinValue}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};