import flipCard from "./flipCard";
import { wrongCounter, matchedCounter } from "./scoreCounter";

let firstCard = undefined;
let clicked = 2;

export default function checkPair (card, command, setShow, scoreValue, shufleImages) {
    
    // disabled before start button is clicked
    if (command === 'start') {
        clicked = 0;
        return;
    } else if (command === 'reset') {
        clicked = 2;
    }
    // Wait for unmatched pair to flip back
    if ( clicked === 2 ) {
        return;
    }
    const flipped = flipCard(card);
    if (flipped) {
        return;
    }
    
    if (firstCard) {
        clicked++;
        // select the second card
        if (firstCard.classList[1] === card.classList[1]) {
            firstCard = undefined;
            // restart clicked
            clicked = 0;
            // iterate matched
            matchedCounter(setShow, scoreValue, shufleImages);
        } else {
            // iterate wrong counter
            wrongCounter(scoreValue);
            setTimeout(() => {
                card.classList.remove("flipped");
                firstCard.classList.remove("flipped");
                firstCard = undefined;
                // restart clicked
                clicked = 0;
            }, 1000)
        }
    } else {
        // when first picture is selected
        firstCard = card;
        clicked++;
    }
}