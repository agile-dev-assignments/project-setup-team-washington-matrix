const learnRouter = require('express').Router();
const fs = require('fs');

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
learnRouter.get('/movements/king', async (req, res, next) => {
    res.json({
        data: 'king data',
    });
});

learnRouter.get('/movements/queen', async (req, res, next) => {
    res.json({
        data: 'queen data',
    });
});
learnRouter.get('/movements/rook', async (req, res, next) => {
    res.json({
        data: 'rook data',
    });
});
learnRouter.get('/movements/bishop', async (req, res, next) => {
    res.json({
        data: 'bishop data',
    });
});
learnRouter.get('/movements/knight', async (req, res, next) => {
    res.json({
        data: 'Knight data',
    });
});
learnRouter.get('/movements/pawn', async (req, res, next) => {
    res.json({
        data: 'Pawn data',
    });
});

learnRouter.get('/patterns', async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            get: true,
        },
    });
});

module.exports = learnRouter;
