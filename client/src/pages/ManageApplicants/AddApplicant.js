import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const AddApplicant = () => {
    return(
        <div className='login-container'>
            <Form>
                <h1>Add New Applicant Form</h1>

        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert>

      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="User Email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Enter Password" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text"  placeholder="Enter Phone Number"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="boolean" placeholder="Enter Staus" />
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Control type="boolean" placeholder="Enter type" />
      </Form.Group>


     <br />
     <br />

      
      <Button className='btn btn-success w-100' variant="primary" type="submit">
        Add New Applicant
      </Button>
    </Form>
        </div>

    );
};

export default AddApplicant;