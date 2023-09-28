import { FC } from 'react';
import { Grid } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { MuiInput } from '../MuiInput/MuiInput.tsx';

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

export const Settings: FC<IProps> = ({
  startMinValue,
  startMaxValue,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  error,
  setError,
}) => {
  const onLocalStorageSetHandler = () => {
    localStorage.setItem('minValue', JSON.stringify(minValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  };
  
  const onMinValueChangeHandler = () => {
    if (minValue < 0) {
      setError('Min value can\'t be less than 0');
    } else if (minValue >= maxValue) {
      setError('Min value can\'t be more than max value');
    } else {
      setError('');
    }
  };
  
  const onMaxValueChangeHandler = () => {
    if (maxValue < 0) {
      setError('Max value can\'t be less than 0');
    } else if (maxValue <= minValue) {
      setError('Max value can\'t be less than min value');
    } else {
      setError('');
    }
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
            error={error}
            onBlur={onMinValueChangeHandler}
            onErrorHandler={onMinValueChangeHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiInput
            value={maxValue}
            onChange={setMaxValue}
            name="maxValue"
            fullWidth
            error={error}
            onBlur={onMaxValueChangeHandler}
            onErrorHandler={onMaxValueChangeHandler}
          />
        </Grid>
      </Grid>
      
      <MuiButton
        title="Set new settings"
        fullWidth
        variant="contained"
        size="large"
        onClick={onLocalStorageSetHandler}
        disabled={!!error || startMinValue === minValue && startMaxValue === maxValue}
      />
    </Grid>
  );
};