import React, { useEffect, useState } from "react";
import "../../css/JobDetails.css";
import Button from 'react-bootstrap/Button';
import JobReview from "../../components/JobReview";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Alert from 'react-bootstrap/Alert';
import {getAuthUser} from "../../helper/Storage";

const JobDetails = () => {
  let { id } = useParams();

  const auth = getAuthUser();

  const [job, setJob] = useState({
    loading: true,
    result: null,
    error: null,
    reload : 0
  });

  // sendRequest
  const [request, setRequest] = useState({
    request: "",
    loading: false,
    error: null,
  });


  useEffect(() => {
    setJob({ ...job, loading: true });
    axios
      .get("http://localhost:4000/jobs/" + id)
      .then((resp) => {
        setJob({
          ...job,
          result: resp.data,
          loading: false,
          err: null,
        });
      })

      .catch((err) => {
        setJob({
          ...job,
          loading: false,
          err: "something went wrong",
        });
      });
  }, [job.reload]);

  const sendRequest = (e) => {
       e.preventDefault();
       setRequest({ ...request, loading: true });

  axios.post("http://localhost:4000/jobs/request", {
  user_id: auth.id,
  job_id: id,
 
},{
  headers : {
    token: auth.token,
  },
})
.then((resp) => {
  setRequest({ ...request, loading: false });
  setJob({...job, reload: job.reload + 1})

 
 
}).catch((errors) => {
  setRequest({ ...request, loading: true });

 
});
  }

  return (
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
              <h3>{job.result.position}</h3>
              <p></p>
            </div>
          </div>


          {/*Job Review */}
          <hr />
          <JobReview />
          </>
      )}


      {/*Send Request for job */}
      <div className="send-request-container">
            <Button className='btn btn-dark w-50' variant="primary" type="submit" onClick={sendRequest}>
               SendRequest
            </Button>
      
                
         </div>

      {/*Error Handling */}
            {
            job.loading === false && job.err != null && (     
              <Alert variant="danger" className='p-2'>
            {job.err}
               </Alert>
            )}


            {!auth && (     
              <Alert variant="warning" className='p-2'>
                  please check your profile and then send Request
               </Alert>
            )}

           


    </div>
  );
};

export default JobDetails;
