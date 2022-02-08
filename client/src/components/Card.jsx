import question from '../images/question.png';
import checkPair from '../functions/checkPair';
import { ScoreContext } from '../contexts/scores';
import { useContext } from 'react';

export default function Card (props) {
    const scoreValue = useContext(ScoreContext);
    const image = props.image;
    const setShow = props.setShow;
    const shufleImages = props.shufleImages;

    return <div className={`flip-card ${image}`} onClick={(e) => {
            checkPair(e.target.parentNode.parentNode.parentNode, '', setShow, scoreValue, shufleImages)
        }}>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={question} alt="questionmark" className="card-size"/>
            </div>
            <div className="flip-card-back">
                <img src={image} alt={`${image}`} className="card-size"/>
            </div>
        </div>
    </div>
}