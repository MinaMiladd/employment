import React , { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";




const JobReview = () => {

  

let { id } = useParams();
  const [job , setJob] = useState ({
    loading : true ,
    result : null,
    error : null,
   });
  


   useEffect( () => {
    setJob({...job, loading : true});
   axios 
   .get("http://localhost:4000/jobs/" + id)
   .then((resp) => {
    setJob({
      ...job,
       result : resp.data,
        loading : false , 
        err : null});
   })

   .catch((err) => {
    setJob({
      ...job,
       loading : false, 
       err : "something went wrong",});
  
   });
  },
  []
  );
    return(

      
      <div className="job-details-container p-5">
      {/*Loader */}
      {job.loading === true && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {job.loading === false && job.err == null && (
        <>
          {/* Details of Job */}
          <div className="row">
            <div className="col-3"></div>
            <div className="col-12">
                 
         <div className="review-container ">
         <p>{job.result.position}</p>   
         <p>{job.result.description}</p>
         <p>{job.result.offer}</p> 
         <p>{job.result.max_candidate_number}</p> 
         <p>{job.result.qualifications}</p>        
         </div>

    <div className="row"></div>
            </div>
          </div>

        
        </>
      )}

    </div>

      
      
    );
};

export default JobReview;