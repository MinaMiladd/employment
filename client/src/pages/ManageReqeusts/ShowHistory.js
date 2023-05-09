import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
// import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';
// import { request } from "express";
// import { Link} from "react-router-dom";




const ShowHistory = () => {


  const auth = getAuthUser();
  const [requests , setRequests] = useState ({
    loading : true ,
    results : [],
    error : null,
    reload : 0
   });
   useEffect( () => {
    setRequests({...requests, loading : true});
   axios 
   .get("http://localhost:4000/requests/get-requests",{
    headers : {
      token: auth.token
    }
   })
   .then(resp => {
    setRequests({...requests, results : resp.data, loading : false , err : null});
  
   })
   .catch(err => {
    setRequests({...requests, loading : false, err : "something went wrong"});
  
   });
  },
  [requests.reload]
  );

 
  //
    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">History Of Requests</h3>
              </div> 
               
{/* 
        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert> */}
                
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>id</th>
          <th>Job Tittle</th>
          <th>Applicant</th>
          <th>Requests</th>
        </tr>
      </thead>
      <tbody>
        {
          requests.results.map(request => (
            <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.user_id}</td>
            <td> {request.job_id}</td>
            <td>{request.status}</td>
                 
            <td>
  
              
            </td>
          </tr>
          ))
        }   

       
      </tbody>
    </Table>


             </div>
    );
};


export default ShowHistory;