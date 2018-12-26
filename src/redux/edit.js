import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { HOST } from '../util/util'
import { createNamedReducer } from './util'
import bookReducer from './book'
import questionReducer from './question'

const axios = require('axios');

const ADD_BOOK = "ADD_BOOK"
const FETCH_BOOK = "FETCH_BOOK";
const RECEIVE_BOOKS = "RECEIVE_BOOKS"
const INPUT_CHANGE = "INPUT_CHANGE"
const CREATE_BOOK = "CREATE_BOOK"
const SELECT_FILE = "SELECT_FILE"
const ADD_COVER = "ADD_COVER"

const initialState = {
  book: {
    id: 0,
    title: "",
    author: "",
    isbn: "",
    year: "",
    cover: "",
    description: ""
  },
  question: {
    id: 0,
    bookId: 0,
    chapterId: 0,
    priority: 0,
    question: "",
    answer: ""
  },
  cover: {
  }
};

const editBookReducer = createNamedReducer(bookReducer, "EDIT")
const editQuestionReducer = createNamedReducer(questionReducer, "QUESTION")

function Reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_FILE:
      console.log("select file", action)
      return {...state,
        cover: {...state.cover, coverFile: action.file }
      }

    case "BLANK":
      console.log("blnak");
      return state;

    case "SUCCEED":
      console.log("SUCCEED")
      return state;

    case "FAILED":
      console.log("FAILED")
      return state;

    default:
      return {...state,
        book: editBookReducer(state.book, action),
        question: editQuestionReducer(state.question, action)
      }
  }
}

export const inputChange = (name, id, value) => {
  return {
    type: INPUT_CHANGE,
    name: name,
    id: id,
    value: value
  }
};

export function createBook(book) {
  return {
    type: CREATE_BOOK,
    book: book
  }
}

export function addCover(bookId, file) {
  return {
    type: ADD_COVER,
    bookId: bookId,
    file: file
  }
}

export function uploadSuccess(userInfo) {
  return {
    type: "SUCCEED",
    payload: userInfo
  };
}

export function uploadFailed(userInfo) {
  return {
    type: "FAILED",
    payload: userInfo
  };
}

export function selectFile(file) {
  return {
    type: SELECT_FILE,
    name: "EDIT",
    file: file
  };
}

export function createBookEpic(action$, state$) {
  return action$.pipe(
    ofType(CREATE_BOOK),
    mergeMap(action=>{
      const url = HOST + '/book'
      return axios.post(url, action.book)
          .then(response => uploadSuccess(response.response))
  }))
}

export function addCoverEpic(action$, state$) {
  return action$.pipe(
    ofType(ADD_COVER),
    mergeMap(action=>{
      const url = HOST + '/cover'
      let formData = new FormData()
      formData.append("bookId", action.bookId)
      formData.append("file", action.file)
      return axios.post(url, formData)
          .then(response => uploadSuccess(response.response))
  }))
}

export default Reducer;
