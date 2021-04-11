const learnRouter = require('express').Router();
const fs = require('fs');

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
learnRouter.get('/movements/king', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The king can move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, know as castling.',
            fen: '8/1p2p2p/8/8/4K2p/2p3p1/8/8 w - - 0 1',
        },
    });
});

learnRouter.get('/movements/queen', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The queen can move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.',
            fen: '8/1p2p2p/4p3/8/1pp1Q1pp/8/4p3/1p2p2p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/rook', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The rook can move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.',
            fen: 'p5p1/2p1p3/8/8/4R3/8/2p3p1/p6p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/bishop', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The bishop can move diagonally any number of squares. They are unable to jump over pieces.',
            fen: 'p1p1p3/8/p7/7p/p7/7p/2B1p1p1/8 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/knight', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The knight can move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.',
            fen: '8/4p3/2p3p1/p7/3p3p/1p3p2/8/N7 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/pawn', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The pawn can move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king.',
            fen: '8/1p6/8/2p5/8/3p4/4P3/8 w - - 0 1',
        },
    });
});

learnRouter.get('/patterns', async (req, res, next) => {
    res.json({
        data: {
            pin: {
                info: 'pin data',
                fen: '3rr1k1/5ppp/7b/8/8/1P6/PBP5/1K4RR w K - 0 1',
            },
            fork: {
                info: 'fork data',
                fen: 'r2qk1nr/ppp2ppp/2np4/2b1p1N1/2B1P1b1/3P4/PPP2PPP/RNBQK2R w KQkq - 2 6',
            },
            discovered: {
                info: 'discovered data',
                fen: '4r2k/2r2p1p/4n1p1/6b1/8/1PN5/PBP5/1K1R3R w K - 0 1',
            },
            skewer: {
                info: 'skewer data',
                fen: '8/pp2R3/8/7k/6p1/P7/1P3K2/7r w - - 0 57',
            },
            removeDef: {
                info: 'remove defender data',
                fen: 'start',
            },
            materialAdv: {
                info: 'material advantage data',
                fen: 'start',
            },
        },
    });
});

module.exports = learnRouter;
