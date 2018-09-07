import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './user';

const rootEpic = combineEpics(
  fetchUserEpic
);

export default rootEpic;
