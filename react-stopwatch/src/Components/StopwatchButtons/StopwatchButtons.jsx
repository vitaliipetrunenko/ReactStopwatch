import styl from './StopwatchButton.module.css'

function StopwatchButtons(props){    
    
    return(<div className={styl.StopwatchButtons}>
        <button onClick={()=>props.timeFlow({isPaused:false})}>{props.isPaused ? "Start" : "Stop"}</button>
        <button onClick={(event)=>{props.doubleClickHandler(event)}}>Pause</button>
        <button onClick={()=>props.clearTime(true)}>Restart</button>
    </div>

    );
}
export default StopwatchButtons; 