import question from '../images/question.png';
import checkPair from './checkPair';

// Create a flip card based on https://www.w3schools.com/howto/howto_css_flip_card.asp
export default function createCard (image, setShow) {

    return <div className={`flip-card ${image}`} key={Math.floor(Math.random() * 100000)} onClick={(e) => {
            checkPair(e.target.parentNode.parentNode.parentNode, '', setShow)
        }}>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={question} alt="questionmark" style={{width:"150px", height:"150px"}} />
            </div>
            <div className="flip-card-back">
                <img src={image} alt={`${image}`} style={{width:"150px", height:"150px"}} />
            </div>
        </div>
    </div>
}