import React, {useState} from "react";
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {getAuthUser,setAuthUser} from '../../helper/Storage';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";



const AddJob = () => { 
  const auth = getAuthUser();
  // const navigate = useNavigate();

  const [Job, setJob] = useState({
      position: "",
      description: "",
      offer: "",
      max_candidate_number: "",
      qualifications: "",
   
      err: "",
      loading: false,
      success: null,
    });

    const createJob = (e) => {
      e.preventDefault();
  
      setJob({ ...Job, loading: true });
      const formData = new FormData();
    formData.append("position", Job.position);
    formData.append("description", Job.description);
    formData.append("offer", Job.offer);
    formData.append("max_candidate_number", Job.max_candidate_number);
    formData.append("qualifications", Job.qualifications);

   
    axios
      .post("http://localhost:4000/jobs", formData, {
        headers: {
          token: auth.token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setJob({
          position: "",
          description: "",
          offer: "",
          max_candidate_number: "",
          qualifications: "",
          err: null,
          loading: false,
          success: "product Created Successfully !",
        });
        
      })
      
      .catch((err) => {
        setJob({
          ...Job,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  };

    return(
        <div className='login-container'>
           
                <h1>Add New Job Form</h1>

{
  Job.success && (
        <Alert variant="success" className='p-2'>
          {Job.success}
        </Alert>
  )
}

{
  Job.err && (
        <Alert variant="danger" className='p-2'>
          {Job.err}
        </Alert>
  )
}



    <Form onSubmit={createJob}>
      <Form.Group className="mb-3" >
        <Form.Control 
       value={Job.position}
       onChange={(e) => setJob({...Job, position: e.target.value })}
        type="text"
         placeholder="Job position" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <textarea
        value={Job.description}
        onChange={(e) => setJob({...Job, description: e.target.value })}
         className="form-control" 
         placeholder="Description" 
         rows={5}></textarea>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control
        value={Job.offer}
        onChange={(e) => setJob({...Job, offer: e.target.value })}
         type="text"
        placeholder="Offer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control 
        value={Job.max_candidate_number}
        onChange={(e) => setJob({...Job, max_candidate_number: e.target.value })}
        type="text"  
        placeholder="Max Candidate Number"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control 
        value={Job.qualifications}
        onChange={(e) => setJob({...Job, qualifications: e.target.value })}
        type="text"
        placeholder="Qualifications" />
      </Form.Group>

      

      
      <button className='btn btn-success w-100' variant="primary" type="submit">
        Add New Job
      </button>
    </Form>
        </div>

    );
};

export default AddJob;