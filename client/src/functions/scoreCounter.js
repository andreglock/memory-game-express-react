import checkPair from "./checkPair";

export function wrongCounter (scoreValue) {
    scoreValue.setScores(() => {
        return {
            matched: scoreValue.scores.matched,
            wrong: scoreValue.scores.wrong + 1
        }
    });
}

export function matchedCounter (setShow, scoreValue, shufleImages) {
    if (scoreValue.scores.matched === 7) {
        // endgame
        setShow(true);
        setTimeout(() => {
            checkPair('', 'reset');
            shufleImages();
        }, 500);
    }
    scoreValue.setScores(() => {
        return {
            matched: scoreValue.scores.matched + 1,
            wrong: scoreValue.scores.wrong
        }
    });
}