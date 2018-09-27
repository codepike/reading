import { combineReducers } from 'redux';
import userReducer from './user';
import signupReducer from './signup';

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer
});

export default rootReducer;
