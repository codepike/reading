import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';


const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";
const REGISTER = "REGISTER";
const RECEIVE_REGISTRATION = "RECEIVE_REGISTRATION";
const REGISTRATION_FAILED = "REGISTRATION_FAILED";

const initialState = {
  username: "",
  password: "",
  email: ""
};

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT_CHANGE:
      console.log("action", action);
      return {...state,
        [action.id]: action.value
      };
    case REGISTER:
      console.log("register reduce");
      return state;
    case RECEIVE_REGISTRATION:
      console.log(action);
      return state;
    default:
      return state
  }
}

export function userInputChange(id, value) {
  return {
    type: USER_INPUT_CHANGE,
    id: id,
    value: value
  }
}

export function register(username, password, email) {
  return {
    type: REGISTER,
    username: username,
    password: password,
    email: email
  };
}

function receiveRegistration(response) {
  return {
    type: RECEIVE_REGISTRATION,
    response: response
  };
}

export default signupReducer;

export function registerEpic(action$, state$) {
  return action$.pipe(
    ofType(REGISTER),
    mergeMap(action=>{
      const body = {
        username: action.username,
        password: action.password,
        email: action.email,
        name: "name",
        role: "user"
      }

      console.log("registerEpic", body)
      // const url = 'http://localhost:8080/api/auth/signup';
      const url = 'http://planet-env.3wypf3dzzp.us-east-2.elasticbeanstalk.com/auth/signup';
      // http://planet-env.3wypf3dzzp.us-east-2.elasticbeanstalk.com/
      // const url = 'http://localhost:8080/api/auth/signup';
      return ajax(
       {
         url: url,
         method: "POST",
         body: body,
         headers: {'Content-Type': 'application/json' }
       }
      ).map(response=> receiveRegistration(response.response))
        .catch(error=>Observable.of(receiveRegistration(error)))
    })
  )
};
