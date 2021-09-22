import checkPair from "./checkPair";

export function wrongCounter () {
    let wrong = document.getElementById('wrong').innerText;
    wrong = parseInt(wrong) + 1;
    document.getElementById('wrong').innerText = wrong;
}

export function matchedCounter (setShow) {
    let matched = document.getElementById('matched').innerText
    matched = parseInt(matched) + 1;
    document.getElementById('matched').innerText = matched;
    if (matched === 8) {
        document.getElementById('matched').innerText = 0;
        checkPair('', 'reset');
        // endgame
        setShow(true);
    }
}