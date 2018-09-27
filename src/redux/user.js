import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';


const SIGNIN = "SIGNIN";
const RECEIVE_SIGNIN = "RECEIVE_SIGNIN";
const USER_INPUT_CHANGE = "USER_INPUT_CHANGE"


const initialState = {
  username: "",
  passsword: "",
  isLoggedIn: false,
  token: "",
  msg: "msg",
  tokenType: "",
  accessToken: ""
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      console.log("action", action);
      return {...state,
        msg: action.username + " : " + action.password
      };
    case RECEIVE_SIGNIN:
      console.log('receive_signin', action);
      return {...state,
        msg: action.payload,
        accessToken: action.payload.accessToken,
        tokenType: action.payload.tokenType,
        isLoggedIn: true
      };
    case USER_INPUT_CHANGE:
      return {...state,
        [action.id]: action.value
      }
    default:
      return state
  }
}

export function signinUser(username, password) {
  return {
    type: SIGNIN,
    username: username,
    password: password
  }
};

export function receiveUser(userInfo) {
  console.log("receive: ", userInfo)
  return {
    type: RECEIVE_SIGNIN,
    payload: userInfo
  };
}

export const userInputChange = (id, value) => {
  console.log("input", id, value);
  return {
    type: USER_INPUT_CHANGE,
    id: id,
    value: value
  }
};

export default userReducer;

export function fetchUserEpic(action$, state$, {makeRequest}) {
  return action$.pipe(
    ofType(SIGNIN),
    mergeMap(action=>{
      const body = {
        usernameOrEmail: action.username,
        password: action.password
      }

      // const url = 'http://localhost:8080/api/auth/login';
      const url = 'http://planet-env.3wypf3dzzp.us-east-2.elasticbeanstalk.com/auth/login';

      return ajax({
          type: "POST",
          url:url,
          body: body,
          headers: {'Content-Type': 'application/json' }})
        .map(response=> receiveUser(response.response))
        .catch(error=>Observable.of(receiveUser(error)))
    })
  )
}

export function fetchUserEpic2(action$, state$, {makeRequest}) {
  return action$.pipe(
    ofType(SIGNIN),
    mergeMap(action=>{
      const body = {
        usernameOrEmail: action.username,
        password: action.password
      }

      const url = 'http://planet-env.3wypf3dzzp.us-east-2.elasticbeanstalk.com/auth/login';
      return ajax.post(url, body, {'Content-Type': 'application/json'})
        .map(response=> receiveUser(response.response))
        .catch(error=>Observable.of(receiveUser(error)))
    })
  )
}

export function fetchUserEpic1(action$, state$, {makeRequest}) {
  return action$.pipe(
    ofType("AAAA"),
    mergeMap(action=>{
      console.log('zzzzzzzzzzzzzz');
      const body = {
        usernameOrEmail: action.username,
        password: action.password
      }

      return makeRequest('api/auth/login', 'POST', body).map(
        (response) =>{
           console.log("response: ", response)
           return receiveUser(response.response);
         }
      );
    }
  )
)
}
