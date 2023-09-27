import { FC } from 'react';
import { Grid } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { MuiInput } from '../MuiInput/MuiInput.tsx';

interface IProps {
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
}

export const Settings: FC<IProps> = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
}) => {
  const onLocalStorageSetHandler = () => {
    localStorage.setItem('minValue', JSON.stringify(minValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  };
  
  return (
    <Grid item xs={12} sm={6}>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <MuiInput
            value={minValue}
            onChange={setMinValue}
            name="minValue"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiInput
            value={maxValue}
            onChange={setMaxValue}
            name="maxValue"
            fullWidth
          />
        </Grid>
      </Grid>
      
      <MuiButton
        title="Set new settings"
        fullWidth
        variant="contained"
        size="large"
        onClick={onLocalStorageSetHandler}
      />
    </Grid>
  );
};