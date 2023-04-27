import React from 'react';
import '../../css/JobDetails.css';
import SendRequest from '../../components/SendRequest';
import JobReview from '../../components/JobReview';


const JobDetails = () => {
    return(
      <div className='job-details-container p-5'>
        {/* Details of Job */}
         <div className='row'>
             <div className='col-3'>
              <img className='job-image' src="https://picsum.photos/200/300"  alt=''/>

             </div>
             <div className='col-9'>
              <h3>Job Tittle</h3>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

              </p>

             </div>
         </div>


        {/*Job Review */}
        <hr />
        <JobReview />
        {/*
        <JobReview />
        <JobReview />
        <JobReview />
         */}


         
        {/*Send Request for job */}
        <SendRequest />
        

      </div>
    );
};

export default JobDetails;