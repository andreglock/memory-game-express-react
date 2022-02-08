import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ScoreContext } from '../contexts/scores';
import { TimerContext } from '../contexts/timer';
import timerHandler from "../functions/timerHandler";
import ScoreDetail from './ScoreDetail';

export default function SubmitScores (props) {
    const {scores, setScores} = useContext(ScoreContext);
    const {time, setTime} = useContext(TimerContext);
  
    const handleClose = () => {
        // reset wrong:
        setScores(() => {
            return {
                matched: 0,
                wrong: 0
            }
        });
        // reset timer:
        timerHandler(setTime, 'reset');
        props.setShow(false);
    }

    let score = 0;

    // calculate score:
    const timeArray = time.split(':');
    const elapsedSeconds = ( (parseInt(timeArray[0]) * 600) + parseInt(timeArray[1]) ) / 10;
    score = 10000 * ( 1 / ( elapsedSeconds / 2 + scores.wrong * 2 ) );
    // reset timer after recording the elapsedSeconds
    timerHandler(setTime, 'stop');

    return (
        <>  
            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div>Congratulations! You finished with a score of {score.toFixed(0)}</div>
                        <ScoreDetail />
                    </Modal.Title>
                    
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor="playerName">Name:</label>
                        <input id="playerName" name="playerName" type="text" placeholder="your name here" required minLength="3"  maxLength="22"/>
                        <div>Would you like to submit your score?</div>
                        <div className="d-flex justify-content-around">
                            <input type="submit" value="Yes" className="btn btn-primary" onClick={(e) => {
                                e.preventDefault()                                
                                const name = document.getElementById("playerName").value;
                                // make post req to express
                                if (name.length > 2 && name.length < 23 && score > 0) {
                                fetch('/posts', { 
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        "name": name,
                                        "score": parseInt(score.toFixed(0))
                                    })
                                })
                                    .then(res => res.json())
                                    .catch(err => console.warn(err));
                                }
                                handleClose();
                            }}/>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}