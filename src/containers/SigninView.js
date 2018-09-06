import React from 'react';
import { Input } from 'reactstrap'
import Signin from '../components/SigninComponent';
import { signinUser } from '../redux/user';
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninView);
