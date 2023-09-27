import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';

interface IProps {
  value: number;
  onChange: (value: number) => void;
  name: string;
  fullWidth?: boolean;
}

export const MuiInput: FC<IProps> = ({
  value,
  onChange,
  name,
  fullWidth,
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value));
  
  return (
    <TextField
      value={value}
      onChange={onChangeHandler}
      name={name}
      fullWidth={fullWidth}
    />
  );
};