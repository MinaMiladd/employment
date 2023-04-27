import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";


const ManageRequests = () => {
    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">Manage Requests</h3>
              <Link  className='btn btn-primary' to={`show`}>Show History Of Requests</Link>
              </div> 
               

        <Alert variant="danger" className='p-2'>
          This is an alert—check it out!
        </Alert>
        <Alert variant="success" className='p-2'>
          This is an alert—check it out!
        </Alert>
                
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Job Tittle</th>
          <th>Applicant</th>
          <th>Requests</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>doctor</td>
          <td> trainer doctor</td>
          <th>Requests</th>
        
          <td>
          <bottun className="btn btn-sm btn-success mx-2">Accept</bottun>
            <bottun className="btn btn-sm btn-danger">Reject</bottun>           
          </td>
        </tr>

        <tr>
        <td>1</td>
          <td>doctor</td>
          <td> trainer doctor</td>
          <th>Requests</th>
          <td>
          <bottun className="btn btn-sm btn-success mx-2">Accept</bottun>
            <bottun className="btn btn-sm btn-danger">Reject</bottun>           
          </td>
        </tr>

        <tr>
        <td>1</td>
          <td>doctor</td>
          <td> trainer doctor</td>
          <th>Requests</th>
          <td>
          <bottun className="btn btn-sm btn-success mx-2">Accept</bottun>
            <bottun className="btn btn-sm btn-danger">Reject</bottun>           
          </td>
        </tr>

       
       
      </tbody>
    </Table>


             </div>
    );
};


export default ManageRequests;