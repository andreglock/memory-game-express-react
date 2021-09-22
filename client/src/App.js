import './App.scss';
import { useState } from "react";
import Cards from './components/Cards';
import ScoreBoard from './components/ScoreBoard';
import SubmitScores from './components/SubmitScores';
import ShowScores from './components/ShowScores';

function App() {
    const [showSubmit, setShowSubmit] = useState(false);
    const [showScores, setShowScores] = useState(false);

	return <>
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
	</>
}

export default App;