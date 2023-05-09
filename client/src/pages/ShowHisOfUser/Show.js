import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import '../../css/ManageJobs.css';
// import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import {getAuthUser} from '../../helper/Storage';



const Show = () => {

  const auth = getAuthUser();
  const [searchs , setSearchs] = useState ({
    loading : true ,
    results : [],
    err : null,
    reload : 0
   });
   useEffect( () => {
    setSearchs({...searchs, loading : true});
   axios 
   .get("http://localhost:4000/history_research",{
    headers : {
      token: auth.token,
    }
   })
   .then(resp => {
    setSearchs({...searchs, results : resp.data, loading : false , err : null});
  
   })
   .catch(err => {
    setSearchs({...searchs, loading : false, err : "something went wrong"});
  
   });
  },
  [searchs.reload]
  );
    return(
             <div className="manage-job p-5">
              <div className="header d-flex justify-content-between mb-5">
              <h3 className="text-center ">History Of Requests</h3>
              </div> 
               
              {/* {
  searchs.success && (
        <Alert variant="success" className='p-2'>
          {searchs.success}
        </Alert>
  )
} */}

{/* {
  searchs.err && (
        <Alert variant="danger" className='p-2'>
          {search.err}
        </Alert>
  )
} */}
                
      <Table striped bordered hover >
      <thead>
        <tr>
          <th>user id</th>
          <th>search word</th>
        </tr>
      </thead>
      <tbody>
      {
          searchs.results.map(search => (
            <tr key={search.id}>
            <td>{search.id}</td>
            <td>{search.search_word}</td>
          </tr>
          ))
        }   
      </tbody>
    </Table>


             </div>
    );
};


export default Show;