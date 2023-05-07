import React, { useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';



const ManageQualifications = () => {
  const auth = getAuthUser();
  const [jobs , setjobs] = useState ({
    loading : true ,
    results : [],
    error : null,
    reload : 0
   });
   useEffect( () => {
    setjobs({...jobs, loading : true});
   axios 
   .get("http://localhost:4000/jobs")
   .then(resp => {
    setjobs({...jobs, results : resp.data, loading : false , err : null});
  
   })
   .catch(err => {
    setjobs({...jobs, loading : false, err : "something went wrong"});
  
   });
  },
  [jobs.reload]
  );

 
  const deleteJob = (id) => {
    axios 
   .delete("http://localhost:4000/qualifications/" + id,{
    headers : {
      token : auth.token,
    }
   })
   .then(resp => {
        setjobs({...jobs, reload : jobs.reload + 1})  
  
   })
   .catch(err => {
   
  
   });
  }

    return(
        <div className="manage-job p-5">
         <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Manage Qualifications</h3>
         <Link  className='btn btn-success' to={`add`}>Add New Qualifications +</Link>
         </div> 
          

   {/* <Alert variant="danger" className='p-2'>
     This is an alert—check it out!
   </Alert>
   <Alert variant="success" className='p-2'>
     This is an alert—check it out!
   </Alert> */}
           
 <Table striped bordered hover >
 <thead>
   <tr>
     <th>job id</th>
     <th>job</th>
     <th>Qualifications</th>
     <th>Description</th>
     <th>Action</th>
     
   </tr>
 </thead>
 <tbody>
   
 {
          jobs.results.map(job => (
            <tr key={job.id}>
              <td>{job.id}</td>
            <td>{job.position}</td>
            <td> {job.description}</td>
            <td>{job.qualifications}</td>        
            <td>
  
              <Link to={job.id}  className="btn btn-sm btn-primary mx-2" >Update</Link>
              
              <bottun className="btn btn-sm btn-danger" onClick = {(e) => {deleteJob(job.id)}}>Delete</bottun>
              
              
            </td>
          </tr>
          ))
        }
       

  

   

  
 </tbody>
</Table>


        </div>
);
};


export default ManageQualifications;