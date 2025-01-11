import { combineReducers, createStore } from 'redux';
import { counterReducer } from '../reducers/counter-reducer';
import { settingsReducer } from '../reducers/settings-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter: counterReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer);
