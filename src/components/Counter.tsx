import { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Btn } from './Btn';

export const Counter: FC = () => {
  return (
    <Box>
      <Box>
        <Typography variant='h2' component='h2'>
          0
        </Typography>
      </Box>
      <Box>
        <Btn name='+1' onClick={() => console.log('+1')} />
        <Btn name='Reset' onClick={() => console.log('reset')} />
      </Box>
    </Box>
  );
};
