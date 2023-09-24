import { FC } from 'react';
import { Grid } from '@mui/material';

import { MuiButton } from '../MuiButton/MuiButton.tsx';
import { MuiInput } from '../MuiInput/MuiInput.tsx';

interface IProps {
}

export const Settings: FC<IProps> = () => {
  return (
    <Grid item xs={ 12 } sm={ 6 }>
      <Grid container spacing={ 2 } style={ {marginBottom: '20px'} }>
        <Grid item xs={ 12 } sm={ 6 }>
          <MuiInput fullWidth/>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <MuiInput fullWidth/>
        </Grid>
      </Grid>
      <MuiButton title="Set" onClick={ () => console.log('SET IT') } fullWidth variant="contained" size="large"/>
    </Grid>
  );
};