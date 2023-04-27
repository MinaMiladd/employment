import React from 'react';
import Card from 'react-bootstrap/Card';
import "../css/JobCard.css";
import {Link} from "react-router-dom";



const JobCard = () => {
    return(
        <div>
    <Card>
      <Card.Img className='card-image' variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Job Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link className='btn btn-dark w-100'  to={'/5'}>View Job</Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};
export default JobCard;