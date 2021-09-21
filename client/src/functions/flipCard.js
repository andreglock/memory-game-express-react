export default function flipCard (cardToFlip) {
    // Prevents flipping twice:
    if (cardToFlip.classList.length === 3) {
        return true;
    } 
    // Flip the card:
    else {
        cardToFlip.classList.add("flipped");
        return false;
    }
}