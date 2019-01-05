import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import { HOST } from '../util/util'

const axios = require('axios');

const FETCH_BOOK = "FETCH_BOOK";
const RECEIVE_BOOK = "RECEIVE_BOOK"
const INPUT_CHANGE = "INPUT_CHANGE"

const initialState = { };

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOK:
      return action.book;

      case INPUT_CHANGE:
        return {...state,
          [action.id]: action.value
        }

    default:
      return state
  }
}

export function fetchBook(name, bookId) {
  return { type: FETCH_BOOK, name: name, bookId: bookId }
};

export function receiveBook(name, book) {
  return { type: RECEIVE_BOOK, name, book: book };
}

export const inputChange = (name, id, value) => {
  return { type: INPUT_CHANGE, name: name, id: id, value: value }
};

export function fetchBookEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_BOOK),
    mergeMap(action=>{
      return axios.get(HOST + '/book/' + action.bookId)
          .then(response => receiveBook(action.name, response.data))
    })
  )
}

export default bookReducer;
