import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './user';
import { registerEpic } from './signup';

const rootEpic = combineEpics(
  fetchUserEpic,
  registerEpic
);

export default rootEpic;
