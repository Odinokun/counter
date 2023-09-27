import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { InfoContainer } from './Info.styles.ts';

interface IProps {
}

export const Info: FC<IProps> = () => {
  
  return (
    <Grid item xs={12} sm={6}>
      <InfoContainer>
        <Typography
          variant="h4"
          align="center"
        >
        </Typography>
      </InfoContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Add"
            fullWidth
            size="large"
            variant="contained"
            onClick={() => {
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiButton
            title="Clear"
            fullWidth
            size="large"
            variant="contained"
            onClick={() => {
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};