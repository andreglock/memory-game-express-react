import './App.scss';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import StartButton from './components/Start';

function App() {
	const [matchedPairs, setMatchedPairs] = useState(0);

	return <>
		<Cards />
		<StartButton matchedPairs={matchedPairs}/>
	</>
}

export default App;