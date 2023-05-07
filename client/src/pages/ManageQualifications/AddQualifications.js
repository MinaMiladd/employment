import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import {getAuthUser} from '../../helper/Storage';
import axios from 'axios';

const AddQualifications = () => {
  const auth = getAuthUser();
  const [qualifications , setqualifications] = useState({
   
    description: '',
   
    err : null,
   loading : false,
   success: null,
  });

  const createQualification  = (e) => {
    e.preventDefault();

      setqualifications({...qualifications, loading : true});

      const formData = new FormData();
      
      formData.append("description", qualifications.description);
     


      axios 
   .post("http://localhost:4000/qualifications", formData , {
    headers: {
      token: auth.token,
      "Content-Type": "multipart/form-data",
    },
   })
   .then((resp) => {
    setqualifications({
    
      description: '',
      
      err : null,
      loading : false,
      success: "qualifications Added Successfully",
    });

   })
   .catch((err) => {
    setqualifications({
      ...qualifications,
      loading: false,
      success: null,
      err: "Something went wrong",
    });
  });

     };
    return(
        <div className='login-container'>
           
                <h1>Add New Qualifications Form</h1>
                {
  qualifications.err && (
        <Alert variant="danger" className='p-2'>
          {qualifications.err}
        </Alert>
  )
}

{
  qualifications.success && (
        <Alert variant="success" className='p-2'>
          {qualifications.success}
        </Alert>
  )
}
<Form onSubmit={createQualification}>

      
      
<Form.Group className="mb-3" >
        <textarea
         value={qualifications.description} 
         onChange={(e) => setqualifications({...qualifications, description : e.target.value})}
         className="form-control" 
         placeholder="Description" 
         rows={5}></textarea>
      </Form.Group>



     <br />
     <br />

      
      <Button className='btn btn-success w-100' variant="primary" type="submit" onClick={createQualification}>
        Add New Qualifications
      </Button>
    </Form>
        </div>

    );
};

export default AddQualifications;