import { combineEpics } from 'redux-observable';
import { fetchUserEpic } from './user';
import { fetchBookEpic } from './book'
import { fetchBooksEpic } from './bookshelf';
import { addCoverEpic, createBookEpic } from './edit';

const rootEpic = combineEpics(
  addCoverEpic,
  createBookEpic,
  fetchUserEpic,
  fetchBookEpic,
  fetchBooksEpic,
);

export default rootEpic;
