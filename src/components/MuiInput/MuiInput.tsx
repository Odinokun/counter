import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';

interface IProps {
  value: number;
  onChange: (value: number) => void;
  name: string;
  fullWidth?: boolean;
  error?: string | null;
  onBlur?: () => void;
  onErrorHandler?: () => void;
}

export const MuiInput: FC<IProps> = ({
  value,
  onChange,
  name,
  fullWidth,
  error,
  onBlur,
  onErrorHandler,
}) => {
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onErrorHandler && onErrorHandler();
    onChange(Number(e.target.value));
  };
  
  return (
    <TextField
      value={value}
      onChange={onChangeHandler}
      name={name}
      fullWidth={fullWidth}
      onBlur={onBlur}
      error={!!error}
      helperText={error}
    />
  );
};