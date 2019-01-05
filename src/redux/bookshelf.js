import 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators'
import Rx from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax'
import { Observable } from 'rxjs'
import { HOST } from '../util/util'

const axios = require('axios')

const FETCH_BOOKS = "FETCH_BOOKS"
const RECEIVE_BOOKS = "RECEIVE_BOOKS"
const FETCH_BOOKS_FAILED = "FETCH_BOOKS_FAILED"

const initialState = {
  books: []
};

function bookshelfReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOKS:
      return {...state,
        books: action.payload
      };

    default:
      return state
  }
}

export function fetchBooks() {
  return {
    type: FETCH_BOOKS
  }
};

export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    payload: books
  };
}

export function fetchBookFailed(error) {
  return {
    type: FETCH_BOOKS_FAILED,
    error: error
  }
}

export function fetchBooksEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_BOOKS),
    mergeMap(action=>{
      return axios.get(HOST + '/book')
          .then(res => receiveBooks(res.data))
    })
  )
}

export default bookshelfReducer;
