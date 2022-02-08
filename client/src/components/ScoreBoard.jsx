import { useContext } from 'react';
import checkPair from '../functions/checkPair';
import timerHandler from '../functions/timerHandler';
import { ScoreContext } from '../contexts/scores';
import { TimerContext } from '../contexts/timer';

export default function ScoreBoard () {
    const {scores} = useContext(ScoreContext);
    const {time, setTime} = useContext(TimerContext);

    return <div id="scoreboard" className="d-flex mx-auto">
        <div>
            <div className="p-1">Matched pairs:
                <span id="matched" className="p-1">{scores.matched}</span>
            </div>
            <div className="p-1">Wrong tries:
                <span id="wrong" className="p-1">{scores.wrong}</span>
            </div>
        </div>
        <button className="mx-md-3 py-2 px-4 px-lg-5" onClick={(e) => {
            checkPair(e, 'start');
            timerHandler(setTime);
        }}>Start!</button>
        <div>
            <div className="p-1">Elapsed time:</div>
            <div id="timer" className="p-1">{time}</div>
        </div>
    </div>
}