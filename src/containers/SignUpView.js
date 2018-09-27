import React from 'react';
import { Input } from 'reactstrap'
import Signup from '../components/SignupComponent';
import { connect } from 'react-redux';
import { userInputChange, register } from '../redux/signup';

class SignUpView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Signup

        user={this.props.user}
        handleUserInputChange = {this.props.handleUserInputChange}
        onRegiser = {this.props.onRegister} />
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


        handleUserInputChange: event => {
          console.log('oooo',event);
          dispatch(userInputChange(event.target.id, event.target.value));
        },

        onRegister : (event, username, password, email) => {
          event.preventDefault();
          dispatch(register(username, password, email));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
