import one from '../images/pairOne.jpg';
import two from '../images/pairTwo.jpg';
import three from '../images/pairThree.jpg';
import four from '../images/pairFour.jpg';
import five from '../images/pairFive.jpg';
import six from '../images/pairSix.jpg';
import seven from '../images/pairSeven.jpg';
import eight from '../images/pairEight.jpg';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Cards = React.memo(props => {
    
    const [cardImages, setCardImages] = useState([]);

    const shufleImages = () => {
        const placeholder = [];
        const images = [
            one, two, three, four, five, six, seven, eight,
            one, two, three, four, five, six, seven, eight,
        ];
        // Add images randomly
        while (placeholder.length < 16) {
            const randomIndex = Math.floor(Math.random() * images.length);
            //const cardTemp = createCard(images[randomIndex], props.setShow, scoreValue);
            placeholder.push(images[randomIndex]);
            images.splice(randomIndex, 1);
        }
        setCardImages(placeholder);
    }

    useEffect(() => {
        shufleImages();
    }, []);

    return <div id="gameContainer">
        {cardImages ? 
            cardImages.map(image => <Card 
                image={image} 
                setShow={props.setShow} 
                key={Math.floor(Math.random() * 100000)}
                shufleImages={shufleImages} 
            />)
            : <div>Loading images...</div>
        }
    </div>;
});

export default Cards;