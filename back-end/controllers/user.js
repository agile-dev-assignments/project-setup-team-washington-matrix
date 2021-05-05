const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/userModel');
userRouter.get('/profile', (req, res, next) => {
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token,
    });
});

userRouter.post('/username', (req, res, next) => {
    UserModel.findOneAndUpdate({ _id: req.user._id }, { username: req.body.username });
    res.json({
        test: req.user,
        username: req.user.username,
    });
});

module.exports = userRouter;
