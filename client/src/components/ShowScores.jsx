import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ShowScores (props) {
    const [scores, setScores] = useState(false);

    const handleClose = () => props.setShow(false);

    useEffect(() => {
        fetch('/posts')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => b.score - a.score);
                setScores(data)
                console.log(data)                    
                })
            .catch(err => console.warn(err)); 
    })

    // sort scores

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
                        scores.map((score) => <li className="d-flex list-group-item">
                            <span className="flex-grow-1 px-2">{score.name}</span>
                            <span>{score.score}</span>
                        </li>) :
                        <></>
                        }
                    </ol>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}