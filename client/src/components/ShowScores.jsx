import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ShowScores (props) {
    const [scores, setScores] = useState(false);
    const [moreScores, setMoreScores] = useState(false);

    const handleClose = () => props.setShow(false);

    useEffect(() => {
        fetch('/posts')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.score - a.score);
                if (data.length > 14) {
                    const moreData = data.splice(15);
                    setMoreScores(moreData);
                    console.log(moreScores) 
                    // this is here to avoid a non usage warning before I reach 15 scores
                }
                setScores(data);
                })
            .catch(err => console.warn(err));
    }, [])

    return (
        <>  
            <Modal
                show={props.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Hall of Fame:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ol className="list-group list-group-numbered">
                        {scores ?
                        scores.map((score) => 
                        <li className="d-flex list-group-item" key={ Math.floor( Math.random() * 100000 ) }>
                            <span className="flex-grow-1 px-2">{score.name}</span>
                            <span>{score.score}</span>
                        </li>) :
                        <div>Loading scores...</div>
                        }
                    </ol>
                    <Button variant="secondary" onClick={handleClose} className="m-2">
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}