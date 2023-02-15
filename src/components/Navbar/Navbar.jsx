import React from 'react'

import './Navbar.css';

import { images } from '../../constants';

const Navbar = (props) => {
  return (
    <div className="app_navbar">
        <div className="navbar_return">
            <img className="navbar_return_img" src={images.BackIcon} onClick={() => window.history.back()}></img>
        </div>
        <div className="navbar_title">{props.title}</div>
    </div>
  )
}

export default Navbar;