import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar= () =>{
  return (
  <div className='navbar-container'>
    <li>
      <Link to="/">
        <img className='logoImage' src='/src/images/logo.png' alt="Houddy logo"></img>
      </Link>
    </li>
    <li>
      <Link to="/postNeeds">Post Needs</Link>
    </li>
    <li>
      <Link to="/browseNeeds">Browse Needs</Link>
    </li>
    <li>
      <Link to="/myNeeds">My Needs</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
  </div>
  );
}
export default Navbar;