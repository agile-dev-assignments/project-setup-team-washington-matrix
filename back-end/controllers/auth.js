const authRouter = require('express').Router();

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
authRouter.get('/', async (req, res, next) => {
    console.log({
        query: req.query,
    });
    res.status(200).json({
        success: true,
        data: {
            get: true,
        },
    });
});

authRouter.get('/all', async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: [
            {
                id: 1,
                property: 'Example One',
            },
            {
                id: 2,
                property: 'Example Two',
            },
        ],
    });
});

authRouter.post('/', async (req, res, next) => {
    console.log({
        body: req.body,
    });
    res.status(200).json({
        success: true,
        data: {
            post: true,
        },
    });
});

authRouter.patch('/', async (req, res, next) => {
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

authRouter.put('/', async (req, res, next) => {
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

authRouter.delete('/:id', async (req, res, next) => {
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

module.exports = authRouter;
