import { Subject } from 'rxjs';
const subject = new Subject();

const zeroTime = new Date(0,0)
let defaultTime = {
    time: zeroTime,
    isPaused: true
}

let state = defaultTime;
let increment;
const TimeStore = {
    state,
    init: () => {
        state = { ...state, time:zeroTime};
        subject.next(state)
    },

    subscribe: setState => subject.subscribe(setState),

    timeFlow: timeFlow => {

        if (!timeFlow.isPaused && state.isPaused === true) {

            state = {
                ...state,
                time: state.time,
                isPaused: timeFlow.isPaused
            };

            subject.next(state);
            clearInterval(increment);

            increment = setInterval(() => {
                if (!timeFlow.isPaused && state.isPaused === false) {
                    let time = new Date(state.time.getTime() + 1000);
                    state = {
                        ...state,
                        time: time,
                        isPaused: timeFlow.isPaused
                    };

                    subject.next(state);
                    console.log(state)
                }
            }, 1000)
        }
        
        else if (timeFlow.isPaused ) {
            state = {
                ...state,
                time: state.time,
                isPaused: timeFlow.isPaused
            };
            clearInterval(increment.current);
            subject.next(state);
            console.log(state)
        }
        else {
            TimeStore.clearTime()
            
        }

    },
    clearTime: (doContinue) => {
        state = defaultTime;
        subject.next(state);
        if(doContinue) TimeStore.timeFlow({isPaused:false});
        
    },

    defaultTime
}
export default TimeStore;
