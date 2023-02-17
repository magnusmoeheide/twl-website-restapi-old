import React from 'react'

import './Navbar.css';
import '../../index.css';

import { images } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = (props) => {
  return (
    <div className="appNavbar">
      <div className="navbarGoBack">
          <FontAwesomeIcon onClick={() => window.history.back()} icon="fa-solid fa-arrow-left" className="goBackIcon" />
        </div>
        <div className="navbarTitle">{props.title}</div>
        <div className="navbarSignout">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className="signoutIcon" />
        </div>
    </div>
  )
}

export default Navbar;