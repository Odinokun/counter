import { FC } from 'react';
import { Grid } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { MuiInput } from '../MuiInput/MuiInput.tsx';

interface IProps {
  maxValue: number;
  setMaxValue: (value: number) => void;
}

export const Settings: FC<IProps> = ({
  setMaxValue,
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <MuiInput fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiInput fullWidth />
        </Grid>
      </Grid>
      <MuiButton
        title="Set"
        //TODO change maxValue
        onClick={() => setMaxValue(8)}
        fullWidth
        variant="contained"
        size="large"
        disabled
      />
    </Grid>
  );
};