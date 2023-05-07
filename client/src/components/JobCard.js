import React from 'react';
import Card from 'react-bootstrap/Card';
import "../css/JobCard.css";
import {Link} from "react-router-dom";



const JobCard = (props) => {
    return(
        <div>
    <Card className='my-2'>
    {/* <Card.Img className='card-image' variant="top" src="https://picsum.photos/200/300" />  */}  
      <Card.Body>
        <Card.Title> {props.position} </Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Link className='btn btn-dark w-100'  to={'/' + props.id}>View Job</Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};
export default JobCard;