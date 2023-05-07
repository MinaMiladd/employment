import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {getAuthUser} from '../../helper/Storage';
import axios from 'axios';
import { useParams } from "react-router-dom";



const UpdateJob = () => {
  const auth = getAuthUser();

  let { id } = useParams();

  const [job , setJob] = useState({
    position: '',
    description: '',
    offer: '',
    max_candidate_number: '',
    qualifications: '',
    err : null,
   loading : false,
   success: null,
  });

  const updateJob  = (e) => {
    e.preventDefault();

      setJob({...job, loading : true});

      const formData = new FormData();
      formData.append("position", job.position);
      formData.append("description", job.description);
      formData.append("offer", job.offer);
      formData.append("max_candidate_number", job.max_candidate_number);
      formData.append("qualifications", job.qualifications);


      axios 
   .put("http://localhost:4000/jobs/" + id, formData , {
    headers: {
      token: auth.token,
      "Content-Type": "multipart/form-data",
    },
   })
   .then((resp) => {
    

   })
   .catch((err) => {
    setJob({
      ...job,
      loading: false,
      success: null,
      err: "Something went wrong",
    });
  });

     };


    return(
        <div className='login-container'>
           
                <h1>Update Job Form</h1>
                {
  job.err && (
        <Alert variant="danger" className='p-2'>
          {job.err}
        </Alert>
  )
}

{
  job.success && (
        <Alert variant="success" className='p-2'>
          {job.success}
        </Alert>
  )
}

<Form onSubmit={updateJob}>
<Form.Group className="mb-3" >
        <Form.Control 
        value={job.position} 
        onChange={(e) => setJob({...job, position: e.target.value})} 
        type="text"
         placeholder="Job position" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <textarea
         value={job.description} 
         onChange={(e) => setJob({...job, description: e.target.value})}
         className="form-control" 
         placeholder="Description" 
         rows={5}></textarea>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control
         value={job.offer} 
         onChange={(e) => setJob({...job, offer: e.target.value})}
         type="text"
        placeholder="Offer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control 
        value={job.max_candidate_number} 
        onChange={(e) => setJob({...job, max_candidate_number: e.target.value})}
        type="text"  
        placeholder="Max Candidate Number"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control 
        value={job.qualifications}
        onChange={(e) => setJob({...job, qualifications: e.target.value})}
        type="text"
        placeholder="Qualifications" />
      </Form.Group>

     

      
      <Button className='btn btn-success w-100' variant="primary" type="submit">
        Update Job
      </Button>
    </Form>
        </div>

    );
};

export default UpdateJob;