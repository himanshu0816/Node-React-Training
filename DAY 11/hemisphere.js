import React from 'react';
import  ReactDOM  from 'react';

const Hemisphere=({latitude})=>{
    const hemisphere=latitude>0 ? 'Northern Hemisphere':'Southern Hemisphere';
    return(
        // <div>You are in Northern Hemisphere</div>
        <div>{hemisphere}</div>
    )
}
export default Hemisphere;