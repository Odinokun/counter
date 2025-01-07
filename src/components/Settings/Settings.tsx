import { FC } from 'react';
import Box from '@mui/material/Box';
import { Input } from '../Input/Input';
import { Btn } from '../Btn/Btn';
import s from './Settings.module.css';

export const Settings: FC = () => {
  return (
    <Box className={s.settings}>
      <Box>
        <Input label='Max value' />
        <Input label='Start value' />
      </Box>
      <Box className={s.settingsFooter}>
        <Btn name='Set' onClick={() => console.log('set')} disabled />
      </Box>
    </Box>
  );
};
