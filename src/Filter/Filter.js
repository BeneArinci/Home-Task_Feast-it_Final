import React from 'react';
import './Filter.css'

const Filter = ({onFilterSelect}) => {
  return(
    <div >
      <p className="tc"> 
        Filter By:
      </p>
      <div className="buttons flex justify-center flex-wrap">
        <button 
          className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Food"
          onClick={ () => onFilterSelect("food") }>
          Food
        </button>
        <button 
          className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Drinks"
          onClick={ () => onFilterSelect("drink") }>
          Drinks
        </button>
        <button 
          className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Staff"
          onClick={ () => onFilterSelect("staff") }>
          Staff
        </button>
        <button className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Florists"
          onClick={ () => onFilterSelect("florists") }>
          Florists
        </button>
        <button className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Marquees-Tents"
          onClick={ () => onFilterSelect("marquees_tents") }>
          Marquees-Tents
        </button>
        <button className="f6 br4 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Audio-Visual"
          onClick={ () => onFilterSelect("audio_visual") }>
          Audio-Visual
        </button>
      </div>
      
      
    </div>
  )
}

export default Filter