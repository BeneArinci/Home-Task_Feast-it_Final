import React from 'react';
import './NavBar.css';

const NavBar = ({onRouteChange}) => {
  return(
    <nav id="navigation-bar">
      <p>Welcome,
      <span 
        className = "f5 link dim black underline pa1 pointer"
        data-testid="log-in-link"
        onClick={ () => onRouteChange("logIn")}>
        log in
      </span>
      to visualise more contents
    </p>
    </nav>
  );
}

export default NavBar;