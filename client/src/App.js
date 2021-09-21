import './App.scss';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import ScoreBoard from './components/ScoreBoard';

function App() {
	const [matchedPairs, setMatchedPairs] = useState(0);

	return <>
		<Cards setMatchedPairs={setMatchedPairs}/>
		<ScoreBoard matchedPairs={matchedPairs}/>
	</>
}

export default App;