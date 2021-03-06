# Memory Game App

Video Demo:  <https://www.youtube.com/watch?v=ZRMigGBBGRo>

This project is the first application I deployed that has both a back and a frontend. It was also my final project for [CS50x](https://cs50.harvard.edu/x/) an amazing computer science course from Harvard University with professor David J. Malan and a great staff. CS50x was the reason I decided to dedicate myself to coding full time.

[This project was deployed here](https://memory-game-scores.herokuapp.com/)

This is a memory game that uses an Express server and a React frontend.

## How it works

Like usual memory games you flip a card and then flip another one trying to match it. If the cards are matched they will remain open, if they don't match they will close after one second has elapsed. This game will also keep track of time and wrong guesses in order to calculate the score. When the 8 pairs are matched, the game ends and the score is calculated. After the game ends your score will be displayed and you will have the opportunity to submit your scores and be in the Hall of Fame.

How my score was calculated? You can see that when hovering the question mark next to your score, but I'm not going to make you look all the way there again, here is the formula: `score = 10000 * ( 1 / ( elapsedSeconds + wrong * 2 ) )`
- Where:
    - elapsedSeconds are the seconds taken for completion
    - wrong are the times a pair was opened without being matched
    
Can you beat the awesome carrot score?

## Front end

The logic behind the game was made in JavaScript, I tried to use as many different modules and functions as possible in order to make the code easier to understand. The React front end was made using create-react-app. The style was made with bootstrap and CSS. Modals were made with React Bootstrap. The images were taken from [unsplash](https://unsplash.com/)

## Back end

The high scores are stored in a mongoDB database that is handled by an Express server. When Hall of Fame is displayed it sends a GET request to the server, that read the high scores in the database. When a score is submitted a POST request will be send to the server that will add a name and score in the database.

### Final Note

The structure of an Express back end and a React frontend that is able to be deployed to a single Heroku app was made based on the tutorial from: https://daveceddia.com/deploy-react-express-app-heroku/.