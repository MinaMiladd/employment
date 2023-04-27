import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../css/Login.css';



const Login = () => {
    return(
        <div className='login-container'>
            <Form>
                <h1>Login Form</h1>

        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>

      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>
      
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </div>

    );
};

export default Login;