import { FC } from 'react';
import { TextField } from '@mui/material';

interface IProps {
  fullWidth?: boolean;
}

export const MuiInput: FC<IProps> = ({...restProps}) => {
  return (
    <TextField { ...restProps }/>
  );
};