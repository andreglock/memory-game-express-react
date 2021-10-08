import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    name: String,
    score: Number
})

export const Score = new mongoose.model('highscores', scoreSchema);