import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import timerHandler from "../functions/timerHandler";

export default function SubmitScores (props) {
  
    const handleClose = () => props.setShow(false);
    let score = 0;

    // calculate score:
    const displayedTime = document.getElementById('timer').innerText;
    timerHandler('', 'stop');
    const timeArray = displayedTime.split(':');
    const elapsedSeconds = ( (parseInt(timeArray[0]) * 600) + parseInt(timeArray[1]) ) / 10;

    let wrong = document.getElementById('wrong').innerText;
    wrong = parseInt(wrong);
    score = 10000 * ( 1 / ( elapsedSeconds + wrong * 2 ) );

    // reset wrong:
    document.getElementById('wrong').innerText = 0;

    // flip back:
    const cards = document.querySelectorAll('.flip-card')
    cards.forEach((e) => {
        e.classList.remove('flipped');
    })

    return (
        <>  
            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Congratulations! You finished with a score of {score.toFixed(0)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* ToDo: finish form and submit */}
                    <form>
                        <label htmlFor="playerName">Name:</label>
                        <input id="playerName" name="playerName" type="text" placeholder="your name here" required minLength="3"  maxLength="22"/>
                        <div>Would you like to submit your score?</div>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <input type="submit" value="Yes" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                            const name = e.target.parentNode[0].value;
                            //make post req to express
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
                            props.setShow(false);
                        }}/>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}