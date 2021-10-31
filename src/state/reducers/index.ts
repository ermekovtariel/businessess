import { combineReducers } from 'redux';
import { reducer } from './dateReducer';

const reducers = combineReducers({
  date: reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
