const express = require('express'); // CommonJS import style!

const app = express(); // instantiate an Express object

const authController = require('./controllers/auth');

app.use('/auth', authController);

const PORT = 3000; // the port to listen to for incoming requests
app.listen(port, function () {
    console.log(`Server running on port: ${port}`);
});

module.exports = app;
