import { ChangeEvent, FC, useState } from 'react';
import { Grid, TextField } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';

interface IProps {
  startValue: number;
  setStartValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
}

export const Settings: FC<IProps> = ({
  startValue,
  setStartValue,
  maxValue,
  setMaxValue,
}) => {
  const [startInputValue, setStartInputValue] = useState<number>(startValue);
  const [maxInputValue, setMaxInputValue] = useState<number>(maxValue);
  const [needSet, setNeedSet] = useState<boolean>(false);
  
  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'start') {
      setNeedSet(true);
      setStartValue(+value);
      setStartInputValue(+value);
    } else if (name === 'max') {
      setNeedSet(true);
      setMaxValue(+value);
      setMaxInputValue(+value);
    }
  };
  
  return (
    <Grid item xs={12} sm={6}>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={startInputValue}
            name="start"
            onChange={changeInputHandler}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={maxInputValue}
            name="max"
            onChange={changeInputHandler}
            fullWidth
          />
        </Grid>
      </Grid>
      <MuiButton
        title="Set"
        //TODO change maxValue
        onClick={() => setMaxValue(8)}
        fullWidth
        variant="contained"
        size="large"
        disabled={!needSet}
      />
    </Grid>
  );
};