import React from 'react';
import './Filter.css'

const Filter = () => {
  return(
    <div >
      <p className="tc"> 
        Filter By:
      </p>
      <div className="buttons flex justify-center">
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Food">Food</button>
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Drinks">Drinks</button>
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Staff">Staff</button>
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Florists">Florists</button>
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Marquees-Tents">Marquees-Tents</button>
      <button className="f6 pointer grow link dim ba bw1 ph3 pv2 mb2 dib dark-pink bg-yellow ba b--dark-pink shadow-3 ma2" value="Audio-Visual">Audio-Visual</button>
      </div>
      
      
    </div>
  )
}

export default Filter