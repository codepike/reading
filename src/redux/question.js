import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import { HOST } from '../util/util'

const axios = require('axios');

const FETCH_QUESTION = "FETCH_QUESTION";
const RECEIVE_QUESTION = "RECEIVE_QUESTION"
const INPUT_CHANGE = "INPUT_CHANGE"

const initialState = {
  id: 0,
  bookId: 0,
  chapterId: 0,
  priority: 0,
  question: "",
  answer: ""
};

function questionReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return action.question;

      case INPUT_CHANGE:
        return {...state, [action.id]: action.value }

    default:
      return state
  }
}

export function fetchQuestion(bookId, chapterId) {
  return { type: FETCH_QUESTION, bookId: bookId, chapterId: chapterId }
};

export function receiveQuestion(question) {
  return { type: RECEIVE_QUESTION, question: question };
}

export const inputChange = (id, value) => {
  return { type: INPUT_CHANGE, id: id, value: value }
};

export function fetchQuestionEpic(action$, state$) {
  return action$.pipe(
    ofType(FETCH_QUESTION),
    mergeMap(action=>{
      return ajax(HOST + '/question/' + action.bookId + "/" + action.chapterId)
          .map(response => receiveQuestion(response.response))
    })
  )
}

export default questionReducer;
