import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../css/Register.css';

const Register = () => {
    return(
        <div className='register-container'>
        <Form>
            <h1>Registration Form</h1>

    <Alert variant="danger" className='p-2'>
      This is an alert—check it out!
    </Alert>

    <Form.Group className="mb-3" >
    <Form.Control type="text" placeholder="phone" />
  </Form.Group>


  <Form.Group className="mb-3" >
    <Form.Control type="email" placeholder="Enter Your Email" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  
  <Button className='btn btn-dark w-100' variant="primary" type="submit">
    Register
  </Button>
</Form>
    </div>

    );
};

export default Register;