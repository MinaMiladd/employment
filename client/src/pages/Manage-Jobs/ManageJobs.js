import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';


const ManageJobs = () => {
    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">Manage Jobs</h3>
              <Link  className='btn btn-success' to={`add`}>Add New Job +</Link>
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
          <th>Job Qualifications</th>
          <th>max-candidate-number</th>
          <th>offer</th>
          <th>Description</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>FullStack Developer</td>
          <td> Developer</td>
          <td> 10</td>
          <td> offer example</td>
          <td> project called "Employment", which helps people to find jobs</td>
          <th>doctor</th>
          <td>

            <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
            <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
            <bottun className="btn btn-sm btn-danger">Delete</bottun>
            
            
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>FullStack Developer</td>
          <td> Developer</td>
          <td> 10</td>
          <td> offer example</td>
          <td> project called "Employment", which helps people to find jobs</td>
          <th>doctor</th>
          <td>

            <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
            <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
            <bottun className="btn btn-sm btn-danger">Delete</bottun>
            
            
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>FullStack Developer</td>
          <td> Developer</td>
          <td> 10</td>
          <td> offer example</td>
          <td> project called "Employment", which helps people to find jobs</td>
          <th>doctor</th>
          <td>

            <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
            <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
            <bottun className="btn btn-sm btn-danger">Delete</bottun>
            
            
          </td>
        </tr>

        <tr>
          <td>1</td>
          <td>FullStack Developer</td>
          <td> Developer</td>
          <td> 10</td>
          <td> offer example</td>
          <td> project called "Employment", which helps people to find jobs</td>
          <th>doctor</th>
          <td>

            <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
            <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
            <bottun className="btn btn-sm btn-danger">Delete</bottun>
            
            
          </td>
        </tr>

       
      </tbody>
    </Table>


             </div>
    );
};


export default ManageJobs;