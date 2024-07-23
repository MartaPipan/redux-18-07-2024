import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countSlice';

const rootReducer = combineReducers({
  count: countReducer,
  // users: usersReducer,
});


export default rootReducer;