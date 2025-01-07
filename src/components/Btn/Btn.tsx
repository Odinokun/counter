import { FC } from 'react';
import Button from '@mui/material/Button';

type PropsType = {
  name: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Btn: FC<PropsType> = ({ name, onClick, disabled }) => {
  return (
    <Button variant='contained' onClick={onClick} disabled={disabled}>
      {name}
    </Button>
  );
};
