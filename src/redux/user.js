import 'rxjs';
import { ofType } from 'redux-observable'
import { mergeMap, pipe, map } from 'rxjs/operators';
const SIGNIN = "SIGNIN";
const RECEIVE_SIGNIN = "RECEIVE_SIGNIN";

const initialState = {
  username: "",
  isLoggedIn: false,
  token: "",
  msg: "msg"
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      console.log("action", action);
      return {...state,
        msg: action.username + " : " + action.password
      };
    case RECEIVE_SIGNIN:
    return {...state,
      msg: action.payload
    };
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

export default userReducer;

export function fetchUserEpic(action$, state$, {makeRequest}) {
  return action$.pipe(
    ofType(SIGNIN),
    mergeMap(action=>{
      console.log('zzzzzzzzzzzzzz');
      const body = {
        username: "zhihuipan",
        password: "123456"
      }

      return makeRequest('/api/auth', 'GET', body).map(
        response =>{
           console.log("EEEEEE");
           return receiveUser("DDDDDDDDDDD")
         }
      );
    }
  )
)
}

// export function fetchUserEpic(action$, state$, {makeRequest}) {
//   return action$
//     .ofType(SIGNIN)
//     .mergeMap(action=>{
//       console.log(action);
//       const body = {
//         username: "zhihuipan",
//         password: "123456"
//       }
//       return makeRequest('/api/auth', 'GET', body).map(
//         responose => receiveUser(responose.response)
//       )
//     })
// };

// export function fetchUserEpic(action$, store, {makeRequest}) {
//   return action$
//     .ofType(SIGNIN)
//     .mergeMap(action=>{
//       console.log(action);
//       const body = {
//         username: "zhihuipan",
//         password: "123456"
//       }
//       return makeRequest('/api/auth', 'GET', body).map(
//         responose => receiveUser(responose.response)
//       )
//     })
// };

// export fetchUserEpic;
