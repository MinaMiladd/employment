import React from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
import Alert from 'react-bootstrap/Alert';



const ShowHistoryOfApp = () => {
    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">History Of Requests</h3>
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
          <th>Applicant</th>
          <th>Job</th>
          <th>Requests status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>peter</td>
          <td> doctor</td>
          <th>Requests status</th>
        
          
        </tr>

        <tr>
        <td>1</td>
          <td>Minaaaaaaaaaaaaaa</td>
          <td> doctor</td>
          <th>Requests status</th>
          
        </tr>

        <tr>
        <td>1</td>
          <td>peter</td>
          <td> doctor</td>
          <th>Requests status</th>
         
        </tr>

       
       
      </tbody>
    </Table>


             </div>
    );
};


export default ShowHistoryOfApp;