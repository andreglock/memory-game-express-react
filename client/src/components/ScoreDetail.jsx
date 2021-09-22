export default function ScoreDetail () {
    return <>
    <div id="question-mark">?
        <div id="scoreDetail">
            <p>
                Your score is calculated based on the wrong pairs and the elapsed time, with the following function:
            </p>
            <p>
                score = 10000 * ( 1 / ( elapsedSeconds + wrong * 2 ) )
            </p>
        </div>
    </div>
    </>
}