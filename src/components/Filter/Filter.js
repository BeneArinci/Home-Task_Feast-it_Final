import React from 'react';
import './Filter.css';
import { filteringOptions } from '../../filteringOptions'
import FilterBtn from '../FilterBtn/FilterBtn'

const Filter = ({onFilterSelect}) => {
  return(
    <div >
      <p className="tc"> 
        Filter By:
      </p>
      <div className="buttons flex justify-center flex-wrap">
        {
          filteringOptions.map( (btn) => {
            return <FilterBtn 
              name = {btn.name}
              filter = {btn.filter}
              onFilterSelect = {onFilterSelect}
            />
          })
        }
      </div>
    </div>
  );
}

export default Filter;