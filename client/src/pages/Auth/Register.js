import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../css/Register.css';
import axios from "axios";
import {setAuthUser} from '../../helper/Storage';
import { useNavigate } from "react-router-dom";

const Register = () => {


  const navigate = useNavigate();

  const [ register , setRegister ] = useState({
    email : '',
    password : '',
    phone : '',
    loading : false,
    err : [],
  });

const RegisterFun = (e) => {
e.preventDefault();
setRegister({...register, loading: true, err: []})
axios.post("http://localhost:4000/auth/register", {
  email: register.email,
  password: register.password,
  phone : register.phone
}).then((resp) => {
  setRegister({...register, loading: false, err: [] });

  setAuthUser(resp.data);
  navigate("/");
 
}).catch((errors) => {
  setRegister({...register, loading: false, err: errors.response.data.errors,
  });
});

};


    return(
        <div className='register-container'>
       
            <h1>Registration Form</h1>
            {register.err.map((error , index) => (
               <Alert key={index} variant="danger" className='p-2'>
               {error.msg}
             </Alert>
         ))} 

    <Form onSubmit={RegisterFun}>
    <Form.Group className="mb-3" >
    <Form.Control 
    type="text" 
    placeholder="phone"
    value={register.phone}
    onChange={(e) => setRegister({...register, phone: e.target.value })} 
    />
  </Form.Group>


  <Form.Group className="mb-3" >
    <Form.Control 
    type="email"
    placeholder="Enter Your Email"
    value={register.email}
    onChange={(e) => setRegister({...register, email: e.target.value })} 
    />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Control
     type="password" 
     placeholder="Enter Password" 
     value={register.password}
    onChange={(e) => setRegister({...register, password: e.target.value })} 
     />
  </Form.Group>
  
  <Button
   className='btn btn-dark w-100' 
   variant="primary" 
   type="submit"
   disabled={register.loading === true}
   >
    Register
  </Button>
</Form>
    </div>

    );
};

export default Register;