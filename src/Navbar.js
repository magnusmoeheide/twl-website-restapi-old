// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flexbox">
        <div className="item"><Link to="/">Home</Link></div>
        <div className="item"><Link to="/CreateNewMap">Create New Map</Link></div>
        <div className="item"><Link to="/ViewMaps">View Maps</Link></div>
        <div className="item"><Link to="/GenerateNewMap">Generate New Map</Link></div>
        <div className="item"><Link to="/AdminHome">Admin Home</Link></div>
        <div className="item"><Link to="/AdminManageGrades">Admin Manage Grades</Link></div>
        <div className="item"><Link to="/AdminManageTeachers">Admin Manage Teachers</Link></div>
      </div>
    </nav>
  );
};

export default Navbar;
