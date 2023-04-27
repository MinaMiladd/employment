import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const AddJob = () => {
    return(
        <div className='login-container'>
            <Form>
                <h1>Add New Job Form</h1>

        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Job position" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <textarea className="form-control" placeholder="Description" rows={5}></textarea>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Offer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text"  placeholder="Max Candidate Number"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Qualifications" />
      </Form.Group>

      

      
      <Button className='btn btn-success w-100' variant="primary" type="submit">
        Add New Job
      </Button>
    </Form>
        </div>

    );
};

export default AddJob;