import React from 'react';

let value = {
    matched: 0,
    wrong: 0
};

export const ScoreContext = React.createContext(value);