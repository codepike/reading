
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
      return state;
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

export default userReducer;
