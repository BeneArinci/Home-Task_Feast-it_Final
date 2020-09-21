import React from 'react';
import Tag from '../Tag/Tag'


const TagsList = ({tags}) => {
  console.log(tags)
  return(
    <div className="flex justify-center flex-wrap f6 tc">
    {
      tags.map((tag, i) => {
        return (
          <Tag 
            key = {i}
            name = {tag.name}
          />
        )
      })
    }
 </div>
  )
}

export default TagsList