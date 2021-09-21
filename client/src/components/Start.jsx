import checkPair from '../functions/checkPair';
import { useEffect } from 'react';

export default function StartButton (props) {    
    let timerInterval;
    
    useEffect(() => {
        if (props.matchedPairs === 8) {
            clearInterval(timerInterval);
        }
    }, [props.matchedPairs, timerInterval])
    
    let deciseconds = 0;
    let seconds = 0;
    let minutes = 0;

    function runTimer(parent) { timerInterval = setInterval(() => {
        deciseconds++;
        if (deciseconds === 10) {
            seconds++;
            deciseconds = 0;
        } if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        parent.lastChild.innerText = `${minutes}:${(seconds >= 10) ? '' : 0}${seconds}${deciseconds}`
    
    }, 100)}

    return <div id="scoreboard">
        <div id="matched">{props.matchedPairs}</div>
        <button onClick={(e) => {
            checkPair(e, 'key');
            runTimer(e.target.parentNode)
        }}>Start the game!</button>
        <div id="timer">0:000</div>
    </div>
}