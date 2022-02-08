import './App.scss';
import { useState } from "react";
import Cards from './components/Cards';
import ScoreBoard from './components/ScoreBoard';
import SubmitScores from './components/SubmitScores';
import ShowScores from './components/ShowScores';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScoreContext } from './contexts/scores';
import { TimerContext } from './contexts/timer';

function App() {
    const [showSubmit, setShowSubmit] = useState(false);
    const [showScores, setShowScores] = useState(false);
	const [scores, setScores] = useState({
		matched: 0,
		wrong: 0
	});
	const [time, setTime] = useState('0:000');
	const scoreValue = {scores, setScores};
	const timerValue = {time, setTime};

	return <>
		<ScoreContext.Provider value={scoreValue}>
			<TimerContext.Provider value={timerValue}>
				<Cards setShow={setShowSubmit}/>
				<ScoreBoard />
				{showSubmit ?
					<SubmitScores 
						setShow={setShowSubmit}
						show={showSubmit}
					/> :
					<></>
				}
				<button className="btn btn-dark m-auto d-block" onClick={() => setShowScores(true)}>
					Hall of Fame
				</button>
				{showScores ?
					<ShowScores 
						setShow={setShowScores}
						show={showScores}
					/> :
					<></>
				}
			</TimerContext.Provider>
		</ScoreContext.Provider>
	</>
}

export default App;
