import React, { useEffect, useState }  from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
// import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';
import { useParams } from 'react-router-dom';



const ManageRequests = () => {
  let { id } = useParams();
  const auth = getAuthUser();
  const [requests , setRequests] = useState ({
    status : "",
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
      token: auth.token,
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

  const Accept = () => {
    setRequests({ ...requests, loading: true });
    axios.put("http://localhost:4000/requests/accept-request/:id"+id,{
      status: requests.status,
    })

  }
   return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">Manage Requests</h3>
              <Link  className='btn btn-primary' to={`show`}>Show Requests</Link>
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
          <th>Job id</th>
          <th>Applicant id</th>
          <th>status</th>
          <th>Action</th>
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
  
            <bottun className="btn btn-sm btn-success mx-2"
             onChange={(e) => setRequests({...requests, status: e.target.value={Accept} })}  
             
             >
              Accept</bottun>
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