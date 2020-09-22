import React from 'react';
import './SupplierCard.css';
import TagsList from '../TagsList/TagsList';

const SupplierCard = ({name, shortDescription, image, tags, onRouteChange}) => {
  return (
    <article 
    title = "supplier-card"
    className="grow shadow-4 pointer br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-washed-yellow ma2" style={{minWidth: "40%"}}
    onClick={ () => onRouteChange("logIn")}>
      <div className= "container">
      <img src={`${image}`} className="img db w-100 br2 br--top" alt={`${name}`} style={{width:"100%", maxHeight:"auto"}}/>
      </div>
      
      <div className="pa2 ph3-ns pb3-ns">
        <div className="flex flex-column dt w-100 mt1">
          <div className="dtc">
            <h1 className="orange pa2 f5 f4-ns mv0">{name}</h1>
          </div>
     
          <div className="pa2 dtc" >
              <h2 className="f5 mv0">{shortDescription}</h2>
          </div>
        </div>
        
        <div className = "pa2"> 
          <TagsList tags={tags} /> 
        </div>
      </div>
    </article>
  );
}

export default SupplierCard;