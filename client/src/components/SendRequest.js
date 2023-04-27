import React from "react";
import Button from 'react-bootstrap/Button';
import '../css/SendRequest.css';

const SendRequest = () => {
    return(
         <div className="send-request-container">
            <Button className='btn btn-dark w-50' variant="primary" type="submit">
        SendRequest
      </Button>
      
                
         </div>
    );
};

export default SendRequest;