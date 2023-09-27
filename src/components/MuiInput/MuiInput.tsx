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
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      onChange(value);
    }
  };
  
  return (
    <TextField
      value={value}
      onChange={onChangeHandler}
      name={name}
      fullWidth={fullWidth}
    />
  );
};