import { combineReducers, createStore } from 'redux';
import { counterReducer } from '../reducers/counter-reducer';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
