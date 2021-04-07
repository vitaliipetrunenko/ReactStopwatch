import React, { useState,useLayoutEffect } from 'react'
import TimeStore from '../../Store/Timer.js';
import StopwatchTime from './StopwatchTime';

function StopwatchTimeContainer(props){
    
    const [TimeState, timeFlow] = useState(TimeStore.defaultTime);
    useLayoutEffect(()=> {
        TimeStore.subscribe(timeFlow);
        TimeStore.init();
      },[]);
    return(<StopwatchTime time={TimeState.time}/>

    );
}
export default StopwatchTimeContainer;



