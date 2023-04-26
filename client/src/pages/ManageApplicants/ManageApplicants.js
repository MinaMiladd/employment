import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';



const ManageApplicants = () => {
    return(
        <div className="manage-job p-5">
         <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Manage Applicants</h3>
         <Link  className='btn btn-success' to={`add`}>Add New Applicant +</Link>
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
     <th>Email</th>
     <th>Password</th>
     <th>Phone</th>
     <th>Status</th>
     <th>token</th>
     <th>type</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>mina@gmail.com</td>
     <td> Password example</td>
     <td> 0123456789</td>
     <td> active or in-active</td>
     <td> token example</td>
     <th>Admin or Applicant</th>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
       <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>

   <tr>
     <td>1</td>
     <td>mina@gmail.com</td>
     <td> Password example</td>
     <td> 0123456789</td>
     <td> active or in-active</td>
     <td> token example</td>
     <th>Admin or Applicant</th>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
       <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>
   <tr>
     <td>1</td>
     <td>mina@gmail.com</td>
     <td> Password example</td>
     <td> 0123456789</td>
     <td> active or in-active</td>
     <td> token example</td>
     <th>Admin or Applicant</th>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary ">Update</Link>
       <Link to={'/5'} className="btn btn-sm btn-info mx-2">List</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>
   <tr>
     <td>1</td>
     <td>mina@gmail.com</td>
     <td> Password example</td>
     <td> 0123456789</td>
     <td> active or in-active</td>
     <td> token example</td>
     <th>Admin or Applicant</th>
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


export default ManageApplicants;