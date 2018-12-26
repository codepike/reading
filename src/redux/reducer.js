import { combineReducers } from 'redux'
import { createNamedReducer } from './util'
import book from './book'
import bookshelf from './bookshelf'
import user from './user'
import edit from './edit'


const rootReducer = combineReducers({
  book: createNamedReducer(book, 'BOOK_SCREEN'),
  bookshelf: bookshelf,
  edit: createNamedReducer(edit, 'EDIT'),
  user: user
});

export default rootReducer;
