import React from 'react';
import { Input, Button } from 'reactstrap';

const Signin = (props) => {
  console.log("zzz", props.user, props.onSignin);
  return (
    <div className="container">
      <div className='Modal'>
        <form >
          <Input type='text' name='username' placeholder='username' />
          <Input type='password' name='password' placeholder='password' />
          <Button onClick={(event) =>{props.onSignin("zzz", 'asdfasdf')}}>Sign In</Button>
        </form>
        <div className='social-signin'>
          <button className="fb"><i className="fa fa-facebook" aria-hidden="true"></i></button>
          <button className="tw" ><i className="fa fa-twitter" aria-hidden="true"></i></button>
        </div>
        <a href='#'>Lost your password ?</a>
        <p>{props.user.msg}</p>
      </div>
    </div>
  );
};

export default Signin;
