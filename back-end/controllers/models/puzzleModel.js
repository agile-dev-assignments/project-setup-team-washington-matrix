const mongoose = require('mongoose');

module.exports = new mongoose.Schema(
    {
        _id: mongoose.ObjectId,
        PuzzleId: String,
        FEN: String,
        Moves: String,
        Rating: Number,
        RatingDeviation: Number,
        Popularity: Number,
        NbPlays: Number,
        Themes: String,
        GameUrl: String,
    },
    { collection: 'Puzzles' }
);
