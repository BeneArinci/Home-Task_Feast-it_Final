import React from 'react';

const Scroll = (props) => {
  //props children refers to anything is wrapped into a non self closing component. In our case is the cardlist
  return(
    <div className='tc' style = {{overflow: 'scroll', height: '640px', width: '80%', margin:'auto'}}>
      {props.children}
    </div>
  );
  }

export default Scroll;