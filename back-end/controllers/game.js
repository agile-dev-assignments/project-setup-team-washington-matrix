const gameRouter = require('express').Router();
const mongoose = require('mongoose');
const mongoConn = require('./mongoConn');
const gameModel = require('./models/gameModel');
const db = mongoConn.getDb();
mongoose.set('useFindAndModify', false);
const game = mongoose.model('GameModel', gameModel);
/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
gameRouter.get('/play', async (req, res, next) => {
    game.findOne({ idset: 1 }).then((response) => {
        if (response.playerSide == 'random') {
            let sides = ['white', 'black'];
            let which = Math.floor(Math.random() * 2);
            console.log(which);
            res.json({
                data: {
                    timeControl: response.timeControl,
                    playerSide: sides[which],
                },
            });
            return;
        }
        res.json({
            data: {
                timeControl: response.timeControl,
                playerSide: response.playerSide,
            },
        });
    });
});

gameRouter.post('/create', async (req, res, next) => {
    game.findOneAndUpdate(
        { idset: 1 },
        { timeControl: req.body.timeControl, playerSide: req.body.playerSide }
    ).then((err, doc) => {
        if (err) return console.log(err);
        console.log('doc saved success');
    });
    res.status(200).json({
        data: {
            idset: 1,
            timeControl: req.body.timeControl,
            playerSide: req.body.playerSide,
        },
    });
});

module.exports = gameRouter;
