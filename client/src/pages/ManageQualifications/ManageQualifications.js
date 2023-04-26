import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';



const ManageQualifications = () => {
    return(
        <div className="manage-job p-5">
         <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Manage Qualifications</h3>
         <Link  className='btn btn-success' to={`add`}>Add New Qualifications +</Link>
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
     <th>job</th>
     <th>Qualifications</th>
     <th>Description</th>
     <th>Action</th>
     
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Doctor</td>
     <td> Developer</td>
     <td>project called "Employment", which helps people to find jobs	</td>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary  mx-2">Update</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>

   <tr>
     <td>1</td>
     <td>Doctor</td>
     <td> Developer</td>
     <td>project called "Employment", which helps people to find jobs	</td>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary  mx-2">Update</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>

   <tr>
     <td>1</td>
     <td>Doctor</td>
     <td> Developer</td>
     <td>project called "Employment", which helps people to find jobs	</td>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary mx-2 ">Update</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>

   <tr>
     <td>1</td>
     <td>Doctor</td>
     <td> Developer</td>
     <td>project called "Employment", which helps people to find jobs	</td>
     <td>

       <Link to={'5'}  className="btn btn-sm btn-primary mx-2">Update</Link>
       <bottun className="btn btn-sm btn-danger">Delete</bottun>
       
       
     </td>
   </tr>

   

   

  
 </tbody>
</Table>


        </div>
);
};


export default ManageQualifications;