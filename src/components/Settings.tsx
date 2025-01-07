import { FC } from 'react';
import Box from '@mui/material/Box';
import { Input } from './Input';
import { Btn } from './Btn';

export const Settings: FC = () => {
  return (
    <Box>
      <Box>
        <Input label='Max value' />
        <Input label='Start value' />
      </Box>
      <Box>
        <Btn name='Set' onClick={() => console.log('set')} />
      </Box>
    </Box>
  );
};
