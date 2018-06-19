import React from 'react';
import { Input, Button } from 'reactstrap';

const Signin = (props) => {
  return (
    <div className="container">
      <div className='Modal'>
        <form >
          <Input type='text' name='username' placeholder='username' />
          <Input type='password' name='password' placeholder='password' />
          <button onClick={() =>{console.log("clicked")}}>Sign In</button>
        </form>
        <div className='social-signin'>
          <button className="fb"><i className="fa fa-facebook" aria-hidden="true"></i></button>
          <button className="tw" ><i className="fa fa-twitter" aria-hidden="true"></i></button>
        </div>
        <a href='#'>Lost your password ?</a>
      </div>
    </div>
  );
};

export default Signin;
