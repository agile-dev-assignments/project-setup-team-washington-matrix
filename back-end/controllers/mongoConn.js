const mongoose = require('mongoose');
require('dotenv').config();
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.jynvy.mongodb.net/ChessApp?retryWrites=true&w=majority`;

var db;

module.exports = {
    connectToServer: function (callback) {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        db = mongoose.connection;
    },

    getDb: function () {
        return db;
    },
};
