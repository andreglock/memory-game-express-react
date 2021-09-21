import flipCard from "./flipCard";

let firstCard = undefined;
let clicked = 2;

export default function checkPair (card, start, setMatchedPairs) {
    
    // disabled before start button is clicked
    if (start === 'key') {
        clicked = 0;
        return;
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
            let matched = parseInt(document.getElementById('matched').innerText);
            // can't call hook here:
            setMatchedPairs(matched + 1);
        } else {
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