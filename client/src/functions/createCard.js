import question from '../images/question.png';
import checkPair from './checkPair';

// Create a flip card based on https://www.w3schools.com/howto/howto_css_flip_card.asp
export default function createCard (image, setShow) {

    return <div className={`flip-card ${image}`} key={Math.floor(Math.random() * 100000)} onClick={(e) => {
            checkPair(e.target.parentNode.parentNode.parentNode, '', setShow)
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