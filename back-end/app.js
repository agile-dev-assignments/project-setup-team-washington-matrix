const express = require('express');

const app = express(); // instantiate an Express object

// Main Routes
app.get('/', (req, res, next) => {
    res.json({
        status: 'live',
    });
});

// Controllers
const authController = require('./controllers/auth');
app.use('/auth', authController);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

module.exports = app;
