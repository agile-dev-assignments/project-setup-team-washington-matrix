const learnRouter = require('express').Router();
const fs = require('fs');

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
learnRouter.get('/movements/king', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The king can move one square in any direction, but you cannot move your king into check. ',
            fen: '8/1p2p2p/8/8/4K2p/2p3p1/8/8 w - - 0 1',
        },
    });
});

learnRouter.get('/movements/queen', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The queen can move 1-8 squares at a time in 1 of 3 directions. Vertically, horizontally, or diagonally. The queen cannot travel over other pieces.',
            fen: '8/1p2p2p/4p3/8/1pp1Q1pp/8/4p3/1p2p2p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/rook', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The rook can move 1-8 squares at a time in 1 of 2 directions. Vertically or horizontally. The rook cannot travel over other pieces.',
            fen: 'p5p1/2p1p3/8/8/4R3/8/2p3p1/p6p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/bishop', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The bishop can move 1-8 squares at a time horizontally.  The bishop cannot travel over other pieces.',
            fen: 'p1p1p3/8/p7/7p/p7/7p/2B1p1p1/8 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/knight', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The knight has 2 variations of movements. It can either move 2 squares up or down and 1 to the left or right. The other option is 1 squares up or down and 2 squares to the left or right. The knight can travel over other pieces.',
            fen: '8/4p3/2p3p1/p7/3p3p/1p3p2/8/N7 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/pawn', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'The pawn can move forward one square with the exception of the first movement with that pawn. If it is the first move that pawn has made it can move up to 2 squares forward. ',
            fen: '8/1p6/8/2p5/8/3p4/4P3/8 w - - 0 1',
        },
    });
});



// mechanics below 

learnRouter.get('/mechanics/castling', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'Castling is a rule which you can move the rook and the king at the same time. This move only works if both the king and rook that you are aiming to castle with has not been moved at that point in the game. In addition, you can never castle while being in check and you can not move your king into a check by castling. ',
            fen: '8/8/8/8/4P3/1PN5/PBPQ1PPP/R3KBNR w - - 0 1',
        },
    });
});
learnRouter.get('/mechanics/enpassant', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'En passant is a French word which means in passing. This is a rule which allows a pawn to capture a pawn after it has just passed it. You may only capture a pawn which has just moved 2 spaces. ',
            fen: 'rnbqkb1r/ppppp1pp/8/3nPp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq f6 0 4',
        },
    });
});
learnRouter.get('/mechanics/pawnpromotion', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo: 'Pawn promotion is a rule that allows you to replace your pawn piece for any piece once it reaches the opponents back rank. ',
            fen: '2r5/1P6/8/8/8/8/8/8 w - - 0 1',
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
