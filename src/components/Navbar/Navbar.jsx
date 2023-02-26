import React from 'react';
import './Navbar.css';
import '../../index.css';
import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  // Check if the user is on the home page
  const isHomePage = window.location.pathname === '/';

  return (
    <div className="appNavbar">
      {/* Only show the go back button if not on the home page */}
      
        <div className="navbarGoBack">
        {!isHomePage && (
          <FontAwesomeIcon onClick={() => window.history.back()} icon="fa-solid fa-arrow-left" className="goBackIcon" />
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
