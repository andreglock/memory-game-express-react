let timeCounter;
let deciseconds = 0;
let seconds = 0;
let minutes = 0;

export default function timerHandler(parent, value) {
    if (value === 'stop') {
        clearInterval(timeCounter);
        deciseconds = 0;
        seconds = 0;
        minutes = 0;
    } // start statement comes later after 'else' because parent is not defined when stop is called
    else if (deciseconds === 0 && seconds === 0 && minutes === 0) {
        timeCounter = setInterval(() => {
            deciseconds++;
            if (deciseconds === 10) {
                seconds++;
                deciseconds = 0;
            } if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            parent.lastChild.lastChild.innerText = `${minutes}:${(seconds >= 10) ? '' : 0}${seconds}${deciseconds}` 
        }, 100)
    }
}