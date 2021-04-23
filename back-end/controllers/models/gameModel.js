const mongoose = require('mongoose');

module.exports = new mongoose.Schema(
    {
        idset: Number,
        timeControl: String,
        playerSide: String,
    },
    { collection: 'Game' }
);
