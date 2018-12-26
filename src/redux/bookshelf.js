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
      return ajax(HOST + '/book')
          .map(res => receiveBooks(res.response))
          .catch(error => fetchBookFailed(error))
    })
  )
}

export function fetchBookEpic1(action$, state$) {
  return action$.pipe(
    ofType(FETCH_BOOKS),
    mergeMap(action=>{

      const url = 'http://planet-env.3wypf3dzzp.us-east-2.elasticbeanstalk.com/book'

      return ajax(url)
        .map(response=> receiveBooks(response))
        .catch(error=>Observable.of(receiveBooks(error)))
    }
  )
)
}

export default bookshelfReducer;
