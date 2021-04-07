import React from 'react'
import styl from './StopwatchTime.module.css'

function StopwatchTime(props){
    
    return(<div className={styl.StopwatchTime}>
        <span>
        {('0'  + props.time.getHours())+':'+('0'  + props.time.getMinutes()).slice(-2)+':'+('0' + props.time.getSeconds()).slice(-2)}
        </span>
    </div>

    );
}
export default StopwatchTime;