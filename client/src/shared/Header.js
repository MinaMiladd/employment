import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "../css/Header.css";
import { removeAuthUser,getAuthUser } from '../helper/Storage';
import { useNavigate } from "react-router-dom";




const Header = () => {
  
    const navigate = useNavigate();
    const auth = getAuthUser();
    const Logout = () => {
      removeAuthUser();
      navigate("/");
    };

    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
          <Link className='nav-link'  to={`/login`}>
          Employment
          </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          
         
         

       

         {/* unAuthenticated Routes */}
         {!auth && (
             <>
            <Link className='nav-link' to={`/login`}>Login</Link>
          <Link className='nav-link' to={`/register`}>Create Acount</Link>
             </>
          )}
          {/* Admin Routes */}

          {auth && auth.type === 1 && (
             <>
          <Link className='nav-link' to={`/manage-jobs`}>Manage Jobs</Link>
          <Link className='nav-link' to={`/manage-applicants`}>Manage Applicants</Link>
          <Link className='nav-link' to={`/manage-qualifications`}>Manage Qualifications</Link>
          <Link className='nav-link' to={`/manage-requests`}>Manage Requests</Link>
             </>
          )}
          
          {/* User Routes */}
          
          {auth && auth.type === 0 && (
             <>
         <Link  className='nav-link' to={`/`}>Home</Link>
             </>
          )}


          </Nav>

       

          <Nav className="ms-auto">
              {/* Authenticated Routes */}
                
                {auth && (<Nav.Link onClick={Logout} >Logout</Nav.Link>)}
          </Nav>
        </Container>
      </Navbar>
        </>

    );
};

export default Header;