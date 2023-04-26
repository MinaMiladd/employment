import React from "react";
import JobCard from "../../components/JobCard";
import Form from 'react-bootstrap/Form';

 const Home = () => {
    return(
        <din className='home-container p-5'>
            {/*Filter */}
      <Form>
      <Form.Group className="mb-3 d-flex">
        <Form.Control type="text" placeholder="Search for a job"  className="rounded-0"/>
        <bottun className='btn btn-dark rounded-0' >Search</bottun>
      </Form.Group>
      </Form>
          
              {/*LIST JOBS*/ }
            <div className="row">
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
                <div className="col-3 card-job-container">
                <JobCard />
                </div>
               
            </div>
               
        </din>
    );
 };

 export default Home;