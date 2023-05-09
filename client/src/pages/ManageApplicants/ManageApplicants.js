import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
// import '../../css/Manageusers.css';
import { Link } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';



const ManageApplicants = () => {
  const auth = getAuthUser();
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

 
  

  const deleteApplicant = (id) => {
    axios 
   .delete("http://localhost:4000/applicant/" + id,{
    headers : {
      token : auth.token,
    }
   })
   .then(resp => {
    setUsers({...users, reload : users.reload + 1})  
  
   })
   .catch(err => {
   
  
   });
  }





    return(
        <div className="manage-job p-5">
         <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Manage Applicants</h3>
         <Link  className='btn btn-success' to={`add`}>Add New Applicant +</Link>
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
     <th>Email</th>
     
     <th>Phone</th>
     <th>Status</th>
   
     <th>type</th>
     <th>Action</th>
   </tr>
 </thead>
 <tbody>
 {
    users.results.map(auth => (    
   <tr>
   <td>{auth.id}</td>
   <td>{auth.email}</td>
  
   <td> {auth.phone}</td>
   <td> {auth.status}</td>
   <td>{auth.type}</td>
    
            <td>
  
              <Link to={'auth.id'}  className="btn btn-sm btn-primary  mx-2" >Update</Link>
              {/* <Link to={'/'+ auth.id} className="btn btn-sm btn-info mx-2">List</Link> */}
              <bottun className="btn btn-sm btn-danger" onClick = {(e) => {deleteApplicant(auth.id)}}>Delete</bottun>
              
              
            </td>
          </tr>
          ))
        }
   

  
 </tbody>
</Table>


        </div>
);
};


export default ManageApplicants;