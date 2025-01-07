import Box from '@mui/material/Box';
import { Settings } from './components/Settings/Settings';
import { Counter } from './components/Counter/Counter';
import s from './app.module.css';

function App() {
  return (
    <Box className={s.app}>
      <Settings />
      <Counter />
    </Box>
  );
}

export default App;
