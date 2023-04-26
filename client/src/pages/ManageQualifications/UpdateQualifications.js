import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';



const UpdateQualifications = () => {
    return(
        <div className='login-container'>
            <Form>
                <h1>Update Qualifications Form</h1>

        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="New Job Tittle" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="New Job Qualifications" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <textarea className="form-control" placeholder="Description" rows={5}></textarea>
      </Form.Group>


     <br />
     <br />

      
      <Button className='btn btn-success w-100' variant="primary" type="submit">
        Update Qualifications
      </Button>
    </Form>
   
        </div>

    );
};

export default UpdateQualifications;