import React from 'react'

const FilterBtn = ({name, filter, onFilterSelect}) => {
  return(
        <button 
          className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value={name}
          onClick={ () => onFilterSelect(filter) }>
          Food
        </button>
  );
}

export default FilterBtn;