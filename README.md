# Memory Game App

This is a memory game that uses an Express server and a React frontend.
Here is a link for a video demonstration: <URL HERE>

## How it works

Like usual memory games you flip a card and then flip another one trying to match it. If the cards are matched they will remain open, if they don't match they will close after one second. This game will also keep track of time and wrong guesses in order to calculate the score. When the 8 pairs are matched, the game ends and the score is calculated. After the game ends your score will be displayed and you will have the opportunity to submit your scores and be in the Hall of Fame.

## Front end

The logic behind the game was made in JavaScript, I tried to use as many different modules and functions as possible in order to make the code easier to understand. The React front end was made using create-react-app. The style was made with bootstrap and CSS. Modals were made with React Bootstrap. The images were taken from [unsplash](https://unsplash.com/)

## Back end

The high scores are stored in a lowDB database that is handled by an Express server. When Hall of Fame is displayed it sends a GET request to the server, that read the high scores in the database. When a score is submitted a POST request will be send to the server that will add a name and score in the database.

### Final Note

The structure of an Express back end and a React frontend that is able to be deployed to a single Heroku app was made based on the tutorial from: https://daveceddia.com/deploy-react-express-app-heroku/.