import React from 'react';
import './Tag.css'


const Tag = ({name}) => {
  return(
    <div className = "single-tag gray">
      {name}
    </div>
  )
}

export default Tag