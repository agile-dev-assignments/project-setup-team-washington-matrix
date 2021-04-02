const gameRouter = require('express').Router();

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
gameRouter.get('/', async (req, res, next) => {
    console.log({
        query: req.query,
    });
    res.status(200).json({
        success: true,
        data: {
            id: 1234567890,
            time: 5,
            incr: 3,
            playerside: 'WHITE',
            board: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
        },
    });
});

gameRouter.post('/create', async (req, res, next) => {
    console.log({
        body: req.body,
    });
    res.status(200).json({
        success: true,
        data: {
            post: true,
            id: 987654321,
            time: 10,
            incr: 15,
            playerside: 'BLACK',
            board: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
        },
    });
});

gameRouter.patch('/', async (req, res, next) => {
    console.log({
        body: req.body,
    });
    res.status(200).json({
        success: true,
        data: {
            patch: true,
        },
    });
});

gameRouter.put('/', async (req, res, next) => {
    console.log({
        body: req.body,
    });

    res.status(200).json({
        success: true,
        data: {
            put: true,
        },
    });
});

gameRouter.delete('/:id', async (req, res, next) => {
    console.log('delete example');
    console.log({
        id: req.params.id,
    });

    res.status(200).json({
        success: true,
        data: {
            delete: true,
        },
    });
});

module.exports = gameRouter;
