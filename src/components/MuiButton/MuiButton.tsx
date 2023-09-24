import { FC } from 'react';
import { Button } from '@mui/material';

interface IProps {
  title: string;
  onClick: () => void;
  fullWidth?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
}

export const MuiButton: FC<IProps> = ({ title, onClick, ...restProps }) => {
  return (
    <>
      <Button onClick={ onClick } { ...restProps }>
        { title }
      </Button>
    </>
  );
};
