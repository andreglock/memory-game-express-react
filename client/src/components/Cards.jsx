import question from '../images/question.png';
import one from '../images/pairOne.jpg';
import two from '../images/pairTwo.jpg';
import three from '../images/pairThree.jpg';
import four from '../images/pairFour.jpg';
import five from '../images/pairFive.jpg';
import six from '../images/pairSix.jpg';
import seven from '../images/pairSeven.jpg';
import eight from '../images/pairEight.jpg';
import checkPair from '../functions/checkPair';

export default function Cards (props) {
    const images = [
        one, two, three, four, five, six, seven, eight,
        one, two, three, four, five, six, seven, eight,
    ];

    const cards = [];

    // Add images randomly
    while (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const cardTemp = createCard(images[randomIndex], props.setMatchedPairs);
        cards.push(cardTemp);
        images.splice(randomIndex, 1);
    }

    return <div id="gameContainer">
        {cards}
    </div>;
}

// Create a flip card based on https://www.w3schools.com/howto/howto_css_flip_card.asp
function createCard(image, setMatchedPairs) {

    return <div className={`flip-card ${image}`} onClick={(e) => {
            checkPair(e.target.parentNode.parentNode.parentNode, '', setMatchedPairs)
        }}>
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={question} alt="questionmark" style={{width:"200px", height:"200px"}} />
            </div>
            <div className="flip-card-back">
                <img src={image} alt={`${image}`} style={{width:"200px", height:"200px"}} />
            </div>
        </div>
    </div>
}