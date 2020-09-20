import React from 'react';

const NavBar = () => {
  return(
    <nav style= {{display:"flex", textAlign:"left", marginLeft:"2%"}}>
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