import React from 'react';


const Tag = ({tag}) => {
  return(
    <div className = "container">
      {tag.name}
    </div>
  )
}

export default Tag