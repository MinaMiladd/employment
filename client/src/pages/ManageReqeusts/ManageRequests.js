import React, { useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
// import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';

const ManageRequests = () => {

//list jobs
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

 //list applicants
 
 const [users , setUsers] = useState ({
   loading : true ,
   results : [],
   error : null,
   reload : 0
  });
  useEffect( () => {
   setUsers({...users, loading : true});
  axios 
  .get("http://localhost:4000/applicant")
  .then(resp => {
   console.log(resp);
   setUsers({...users, results : resp.data, loading : false , err : null});
 
  })
  .catch(err => {
   setUsers({...users, loading : false, err : "something went wrong"});
 
  });
 },
 [users.reload]
 );

  
  // const deleteJob = (id) => {
  //   axios 
  //  .delete("http://localhost:4000/jobs/" + id,{
  //   headers : {
  //     token : auth.token,
  //   }
  //  })
  //  .then(resp => {
  //       setjobs({...jobs, reload : jobs.reload + 1})  
  
  //  })
  //  .catch(err => {
   
  
  //  });
  // }

    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">Manage Requests</h3>
              <Link  className='btn btn-primary' to={`show`}>Show History Of Requests</Link>
              </div> 
               

        {/* <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert>
                 */}
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>id</th>
          <th>Job Tittle</th>
          <th>Applicant id</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          jobs.results.map(job => (
            <tr key={job.id}>
            <td>{job.id}</td>
            <td>{job.position}</td>
            <td> {auth.id}</td>
            <td> {auth.status}</td>
              
            <td>
  
            <bottun className="btn btn-sm btn-success mx-2">Accept</bottun>
            <bottun className="btn btn-sm btn-danger mx-2">Reject</bottun>  
            <Link  className='btn btn-primary' to={`show-history`}>Show History</Link>         
              
            </td>
          </tr>
          ))
        }   
      </tbody>
    </Table>


             </div>
    );
};


export default ManageRequests;