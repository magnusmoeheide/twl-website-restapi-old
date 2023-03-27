import React from 'react';
import './Navbar.css';
import '../../index.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  // Check if the user is on the home page
  const isHomePage = window.location.pathname === '/' || window.location.pathname == '/AdminHome';

  return (
    <div className="appNavbar">
      {/* Only show the go back button if not on the home page */}
      
        <div className="navbarGoBack">
        {!isHomePage && (
          <Link to={props.previous} className="link">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="goBackIcon" />
          </Link>
        )}
        </div>
      
      <div className="navbarTitle">{props.title}</div>
      <div className="navbarSignout">
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="signoutIcon" />
      </div>
    </div>
  );
};

export default Navbar;
