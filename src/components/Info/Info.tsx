import { FC } from 'react';
import { Box, Grid } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';

interface IProps {
}

export const Info: FC<IProps> = () => {
  return (
    <Grid item xs={ 12 } sm={ 6 }>
      <Box sx={ { border: '2px solid black' } }>Output</Box>
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 6 }>
          <MuiButton title="Add" onClick={ () => console.log('ADD NUMBER') } fullWidth size="large"
                     variant="contained"/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <MuiButton title="Clear" onClick={ () => console.log('CLEAR') } fullWidth size="large" variant="contained"/>
        </Grid>
      </Grid>
    </Grid>
  );
};