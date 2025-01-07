import { FC } from 'react';
import Button from '@mui/material/Button';

type PropsType = {
  name: string;
  onClick: () => void;
};

export const Btn: FC<PropsType> = ({ name, onClick }) => {
  return (
    <>
      <Button variant='outlined' onClick={onClick}>
        {name}
      </Button>
    </>
  );
};
