
import React from 'react';
import { Input, Button, Container, Form, FormGroup, Label, Modal,
          ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './signup.css';

const Signup = (props) => {

  return (
    <Container className='App'>
      <Form >
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Enter your username" />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
     </Form>

     <Modal isOpen={true} toggle={props.toggle} className={props.className}>
  <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
  <ModalBody>
  <Form >
    <FormGroup>
      <Label for="username">Username</Label>
      <Input type="text" name="username" id="username" placeholder="Enter your username" />
    </FormGroup>

    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
    </FormGroup>

    <FormGroup>
      <Label for="email">Email</Label>
      <Input type="email" name="email" id="email" placeholder="Enter your email" />
    </FormGroup>
 </Form>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
    </Container>
  );
};

export default Signup;
