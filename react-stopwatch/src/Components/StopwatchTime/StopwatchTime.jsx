import React, { useState,useLayoutEffect } from 'react'
import styl from './StopwatchTime.module.css'

function StopwatchTime(props){
    
    return(<div className={styl.StopwatchTime}>
        {('0'  + props.time.getHours())+':'+('0'  + props.time.getMinutes()).slice(-2)+':'+('0' + props.time.getSeconds()).slice(-2)}
        
    </div>

    );
}
export default StopwatchTime;