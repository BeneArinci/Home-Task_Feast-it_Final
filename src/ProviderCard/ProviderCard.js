import React from 'react';
import './ProviderCard.css'

const ProviderCard = ({name, shortDescription, image}) => {
  return (
    <article className="tl br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-washed-yellow ma2" style={{minWidth: "40%"}}>
      <div className= "container">
      <img src={`${image}`} className="img db w-100 br2 br--top" alt="kitten" style={{width:"100%", maxHeight:"auto"}}/>
      </div>
      
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="orange pa2 f5 f4-ns mv0">{name}</h1>
          </div>
        </div>
        <div className="pa2 dtc tr">
            <h2 className="f5 mv0">{shortDescription}</h2>
        </div>
        <div className = "pa2"> tags </div>
      </div>
    </article>
  )
}

export default ProviderCard