import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return(
    <nav id="navigation-bar">
      <p>Welcome,
      <span className = "f5 link dim black underline pa1 pointer">log in</span>
      or
      <span className = "f5 link dim black underline pa1 pointer">sign up</span>
      to visualise more contents
    </p>
    </nav>
  )
}

export default NavBar