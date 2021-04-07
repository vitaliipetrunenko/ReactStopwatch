import React, { useState, useLayoutEffect } from 'react';
import StopwatchButtons from './StopwatchButtons.jsx';
import { DoubleclickHook } from './DoubleclickHook.js';
import TimeStore from '../../Store/Timer.js';

const StopwatchButtonsContainer = (props) => {

    const [TimeState, timeFlow] = useState(TimeStore.defaultTime);
    useLayoutEffect(() => {
        TimeStore.subscribe(timeFlow);
        TimeStore.init();
    }, []);

    const doubleClickHandler = DoubleclickHook(
        () => { TimeStore.timeFlow({ isPaused: true }) },
        () => { console.log("too slow") }, 300
    );
    return (<StopwatchButtons 
    TimeState={TimeState} 
    timeFlow={TimeStore.timeFlow} 
    clearTime={TimeStore.clearTime} 
    isPaused={TimeState.isPaused} 
    doubleClickHandler={doubleClickHandler}  
    />)
}
export default StopwatchButtonsContainer;

