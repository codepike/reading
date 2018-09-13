import React from 'react';
import { Input, Button } from 'reactstrap';

const Signin = (props) => {
  // console.log("zzz", props.handleUserInputChange);
  return (
    <div className="container">

        <form >
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='username'
            onChange={event=>props.handleUserInputChange(event)}/>
          <Input type='password' name='password' placeholder='password' id='password'
                      onChange={event=>props.handleUserInputChange(event)}/>

          <Button onClick={(event) =>{props.onSignin(props.user.username, props.user.password)}}>Sign In</Button>
        </form>
        <div className='social-signin'>
          <button className="fb"><i className="fa fa-facebook" aria-hidden="true"></i></button>
          <button className="tw" ><i className="fa fa-twitter" aria-hidden="true"></i></button>
        </div>
        <a href='#'>Lost your password ?</a>



    </div>
  );
};

export default Signin;
