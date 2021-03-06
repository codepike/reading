import React from 'react';
import { Input } from 'reactstrap'
import Signin from '../components/SigninComponent';
import { signinUser, userInputChange } from '../redux/user';
import { connect } from 'react-redux';

class SigninView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("aaa", this.props.user);
    return (
      <Signin
        user={this.props.user}
        handleUserInputChange = {this.props.handleUserInputChange}
        onSignin = {this.props.onSignin} />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // same effect
        onSignin : (username, password) => {
          console.log("username, password");
          dispatch(signinUser(username, password));
        },

        handleUserInputChange: event => {
          console.log('oooo',event);
          dispatch(userInputChange(event.target.id, event.target.value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninView);
