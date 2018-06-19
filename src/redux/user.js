
const SIGNIN = "SIGNIN";
const RECEIVE_SIGNIN = "RECEIVE_SIGNIN";

const initialState = {
  username: "",
  isLoggedIn: false,
  token: ""
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      console.log(action);
      return state;
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
