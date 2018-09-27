
import React from 'react';
import { Input, Button, Container, Form, FormGroup, Label, Modal,
          ModalBody, ModalFooter, ModalHeader, Row, Col } from 'reactstrap';
import './signup.css';


const Signup = (props) => {

  return (
    <Container className='App'>
      <Col sm={{ size: 6, order: 2, offset: 3 }}>
          <Form >
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                onChange = {props.handleUserInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password placeholder"
                onChange = {props.handleUserInputChange}/>
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange = {props.handleUserInputChange}/>
            </FormGroup>
            <Button onClick={(event)=>props.onRegiser(event, props.user.username, props.user.password, props.user.email)}>Register</Button>
            </Form>
        </Col>
    </Container>
  );
};

export default Signup;
