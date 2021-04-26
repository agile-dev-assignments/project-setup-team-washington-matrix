const learnRouter = require('express').Router();
const fs = require('fs');
const mongoose = require('mongoose');
const mongoConn = require('./mongoConn');
const puzzleModel = require('../models/puzzleModel');

const db = mongoConn.getDb();
const puzzle = mongoose.model('PuzzlesModel', puzzleModel);
let dbcount = 0;
puzzle.estimatedDocumentCount().then((res) => {
    dbcount = res;
});

/*
    Docs: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
*/
learnRouter.get('/movements/king', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The king can move one square in any direction, but you cannot move your king into check. ',
            fen: '8/1p2p2p/8/8/4K2p/2p3p1/8/8 w - - 0 1',
        },
    });
});

learnRouter.get('/movements/queen', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The queen can move 1-8 squares at a time in 1 of 3 directions. Vertically, horizontally, or diagonally. The queen cannot travel over other pieces.',
            fen: '8/1p2p2p/4p3/8/1pp1Q1pp/8/4p3/1p2p2p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/rook', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The rook can move 1-8 squares at a time in 1 of 2 directions. Vertically or horizontally. The rook cannot travel over other pieces.',
            fen: 'p5p1/2p1p3/8/8/4R3/8/2p3p1/p6p w - - 0 1',
        },
    });
});
learnRouter.get('/movements/bishop', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The bishop can move 1-8 squares at a time horizontally.  The bishop cannot travel over other pieces.',
            fen: 'p1p1p3/8/p7/7p/p7/7p/2B1p1p1/8 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/knight', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The knight has 2 variations of movements. It can either move 2 squares up or down and 1 to the left or right. The other option is 1 squares up or down and 2 squares to the left or right. The knight can travel over other pieces.',
            fen: '8/4p3/2p3p1/p7/3p3p/1p3p2/8/N7 w - - 0 1',
        },
    });
});
learnRouter.get('/movements/pawn', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'The pawn can move forward one square with the exception of the first movement with that pawn. If it is the first move that pawn has made it can move up to 2 squares forward. ',
            fen: '8/1p6/8/2p5/8/3p4/4P3/8 w - - 0 1',
        },
    });
});

// mechanics below

learnRouter.get('/mechanics/castling', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'Castling is a rule which you can move the rook and the king at the same time. This move only works if both the king and rook that you are aiming to castle with has not been moved at that point in the game. In addition, you can never castle while being in check and you can not move your king into a check by castling. ',
            fen: '8/8/8/8/4P3/1PN5/PBPQ1PPP/R3KBNR w - - 0 1',
        },
    });
});
learnRouter.get('/mechanics/enpassant', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'En passant is a French word which means in passing. This is a rule which allows a pawn to capture a pawn after it has just passed it. You may only capture a pawn which has just moved 2 spaces. ',
            fen: 'rnbqkb1r/ppppp1pp/8/3nPp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq f6 0 4',
        },
    });
});
learnRouter.get('/mechanics/pawnpromotion', async (req, res, next) => {
    res.json({
        data: {
            pieceInfo:
                'Pawn promotion is a rule that allows you to replace your pawn piece for any piece once it reaches the opponents back rank. ',
            fen: '2r5/1P6/8/8/8/8/8/8 w - - 0 1',
        },
    });
});

learnRouter.get('/checkmates', async (req, res, next) => {
    res.json({
        data: {
            smothered:
                "A smothered mate occurs when the knight checks the opponent's king while the king is mostly or completely surrounded by it own pieces. Any options to take the knight are unavailable because they would result in the king being placed in check. As a result, the king is checkmated because it has nowhere to go mainly because of its own pieces.",
            backrank:
                "A back-rank checkmate occurs when usually a rook or queen attack the back rank (first rank for White and eigth rank for Black). Any options for the opponent's king to move out of the rank are blocked by either the opponent's own pieces or the player's pieces, and any pieces that can be used to block the attack cannot be defended.",
            scholars:
                "The Scholar's mate is a checkmating pattern for White that can lead to a four turn checkmate when not properly defended against by Black. The sequence of moves that occur is 1.e4 e5, 2.Bc4 Nc6, 3.Qh5 Nf6, and 4.Qxf7. When this checkmate occurs, Black's only option to take White's Queen would be using the King, but White's Queen is defended by White's bishop. As a result, Black's King has nowhere to go and Black is checkmated.",
            fool:
                "The Fool's mate is the fastest checkmating pattern that can occur where White is checkmated in two moves or Black is checkmated in three moves. The checkmate occurs when either side moves their king-side bishop pawn one or two spaces and their king-side knight pawn two spaces in their first two turns while the opposite side moves their King pawn. As a result, the side that moved their King pawn can move their Queen to wither h4 or h5, resulting in a checkmate.",
            kqmate:
                "When one side has just their King left, and the other side has both their King and a Queen, the side with the King and Queen can checkmate the other side. This checkmate occurs by moving the moving the Queen to a position that is two squares away from the King in one direction and one square away in a direction perpendicular to the first direction. From there, the Queen follows the movement of the opponent's King (if the King goes up one square, the Queen should also go up one square). This will result, in the Queen slowly boxing the King into a corner. The Queen keeps following the opponent's King until the opponent's King only has two squares to move between. From there, the side with the Queen can move its King to a square that can protect the Queen when the Queen moves in to checkmate the other side.",
            tworooks:
                "The Two-Rooks checkmate is a mating pattern that forces the opponent to move their King either vertically or horizontally by using two rooks. One rook checks the King and the other rook blocks the row or column on one side of the King. As a result, the King in check must move in a certain direction. Afterwards, alternate moving Rooks until the King is forced to the edge of the board which results in a checkmate. The side with the Rooks must also avoid getting the Rook taken by the other side's King.",
            krmate:
                "The checkmate pattern for a King and a Rook involves cornering the other side's King into a row or column using the Rook while protecting the Rook and blocking the opponent's King's escape squares with the player's King. Once the opponent's King is on the edge of the board, the player can use their own King to block the escape squares of the opponent's King and then checkmating with the Rook.",
        },
    });
});

learnRouter.get('/patterns', async (req, res, next) => {
    res.json({
        data: {
            pin:
                'A pin is when you move a piece that creates an attack on the piece behind the one you are inherently attacking. This can create a devastating attack if the player were to move the piece in the front line of the pin. ',
            fork:
                'A fork is when your piece moves into an position where it is attacking 2 pieces at once. ',
            discovered:
                'A discovered check is when you move a piece that allows another piece to attack the opponents king, thus creating a check. ',
            skewer:
                'A skewer is when you create a check on the opponents king and then when they go to move the king away it opens up an attack on another piece. ',
            removeDef:
                'Remove the defender is when you make a complex attack on the opponents pieces. Essentially you make an attack on the opponents piece that is defending another piece. Once you have successfully attacked the defending piece it gives a free attack on the piece that it was previously defending. ',
            materialAdv:
                'Material advantage is when the pieces left on the board of one side have a greater value than the opponent. The value system goes as follows: A pawn is worth one point, a knight or bishop is worth three points, a rook is worth five points and a queen is worth nine points.            ',
        },
    });
});

learnRouter.get('/puzzles', async (req, res, next) => {
    let randomNum = Math.floor(Math.random() * dbcount);
    puzzle
        .findOne()
        .skip(randomNum)
        .then((response) => {
            res.json({
                data: {
                    puzzleTheme: response.Themes,
                    puzzleRating: response.Rating,
                    puzzleFen: response.FEN,
                },
            });
        });
});

module.exports = learnRouter;
