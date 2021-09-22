import one from '../images/pairOne.jpg';
import two from '../images/pairTwo.jpg';
import three from '../images/pairThree.jpg';
import four from '../images/pairFour.jpg';
import five from '../images/pairFive.jpg';
import six from '../images/pairSix.jpg';
import seven from '../images/pairSeven.jpg';
import eight from '../images/pairEight.jpg';
import createCard from '../functions/createCard';

export default function Cards (props) {
    const images = [
        one, two, three, four, five, six, seven, eight,
        one, two, three, four, five, six, seven, eight,
    ];

    const cards = [];

    // Add images randomly
    while (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const cardTemp = createCard(images[randomIndex], props.setShow);
        cards.push(cardTemp);
        images.splice(randomIndex, 1);
    }

    return <div id="gameContainer">
        {cards}
    </div>;
}