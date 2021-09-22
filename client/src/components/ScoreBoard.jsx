import checkPair from '../functions/checkPair';
import timerHandler from '../functions/timerHandler';

export default function ScoreBoard () {    
    
    return <div id="scoreboard" className="d-flex mx-auto">
        <div>
            <div className="p-1">Matched pairs:<span id="matched">0</span></div>
            <div className="p-1">Wrong tries:<span id="wrong">0</span></div>
        </div>
        <button className="mx-md-3" onClick={(e) => {
            checkPair(e, 'start');
            timerHandler(e.target.parentNode);
        }}>Start!</button>
        <div>
            <div className="p-1">Elapsed time:</div>
            <div id="timer" className="p-1">0:000</div>
        </div>
    </div>
}