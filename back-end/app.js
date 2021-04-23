const express = require('express');
const app = express(); // instantiate an Express object
const cors = require('cors');
const mongoConn = require('./controllers/mongoConn');

mongoConn.connectToServer((err, client) => {
    if (err) console.log(err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Main Routes
app.get('/', (req, res, next) => {
    res.json({
        status: 'live',
    });
});

// Controllers
const authController = require('./controllers/auth');
app.use('/auth', authController);

const gameController = require('./controllers/game');
app.use('/game', gameController);

const learnController = require('./controllers/learn');
app.use('/learn', learnController);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

module.exports = app;
