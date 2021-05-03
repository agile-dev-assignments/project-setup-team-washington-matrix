import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess() not being a constructor

import Chessboard from 'chessboardjsx';

class HumanVsHuman extends Component {
    static propTypes = { children: PropTypes.func };

    state = {
        fen: this.props.setFen ? this.props.setFen : 'start',
        // square styles for active drop square
        dropSquareStyle: {},
        // custom square styles
        squareStyles: {},
        // square with the currently clicked piece
        pieceSquare: '',
        // currently clicked square
        square: '',
        // array of past game moves
        history: [],
        undo: false,
        moveList: this.props.moveList,
        firstMove: this.props.firstMove,
    };

    componentDidMount() {
        this.game = this.state.fen !== 'start' ? new Chess(this.state.fen) : new Chess();

        setTimeout(() => {
            this.makeFirstMove();
        }, 250);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.setFen !== this.props.setFen) {
            this.game = new Chess(this.props.setFen);
            this.setState({
                fen: this.props.setFen,
            });
        }
        if (prevProps.firstMove !== this.props.firstMove) {
            this.setState({
                firstMove: this.props.firstMove,
            });
            setTimeout(() => {
                this.makeFirstMove();
            }, 250);
        }
        if (prevProps.moveList !== this.props.moveList) {
            this.setState({
                moveList: this.props.moveList,
            });
        }
    }

    makeFirstMove() {
        if (this.state.firstMove) {
            this.game.move(this.state.firstMove, { sloppy: true });
            this.setState(({ history, pieceSquare }) => ({
                fen: this.game.fen(),
                history: this.game.history({ verbose: true }),
                squareStyles: squareStyling({ pieceSquare, history }),
            }));
            console.log(this.state.history);
        }
    }

    // keep clicked square style and remove hint squares
    removeHighlightSquare = () => {
        this.setState(({ pieceSquare, history }) => ({
            squareStyles: squareStyling({ pieceSquare, history }),
        }));
    };

    // show possible moves
    highlightSquare = (sourceSquare, squaresToHighlight) => {
        const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce((a, c) => {
            return {
                ...a,
                ...{
                    [c]: {
                        background: 'radial-gradient(circle, #fffc00 36%, transparent 40%)',
                        borderRadius: '50%',
                    },
                },
                ...squareStyling({
                    history: this.state.history,
                    pieceSquare: this.state.pieceSquare,
                }),
            };
        }, {});

        this.setState(({ squareStyles }) => ({
            squareStyles: { ...squareStyles, ...highlightStyles },
        }));
    };

    onDrop = async ({ sourceSquare, targetSquare }) => {
        // see if the move is legal
        let move = this.game.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q', // always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return;
        this.setState(({ history, pieceSquare }) => ({
            fen: this.game.fen(),
            history: this.game.history({ verbose: true }),
            squareStyles: squareStyling({ pieceSquare, history }),
        }));
        if (
            this.state.moveList &&
            this.state.moveList[this.state.history.length - 1] !==
                `${this.state.history[this.state.history.length - 1].from}${
                    this.state.history[this.state.history.length - 1].to
                }`
        ) {
            this.game.undo();
            this.setState({
                fen: this.game.fen(),
                history: this.game.history({ verbose: true }),
            });
        } else if (
            this.state.moveList &&
            this.state.moveList[this.state.history.length - 1] ===
                `${this.state.history[this.state.history.length - 1].from}${
                    this.state.history[this.state.history.length - 1].to
                }`
        ) {
            this.game.move(this.state.moveList[this.state.history.length], {
                sloppy: true,
            });
            this.setState(({ history, pieceSquare }) => ({
                fen: this.game.fen(),
                history: this.game.history({ verbose: true }),
                squareStyles: squareStyling({ pieceSquare, history }),
            }));
        }
        if (this.props.postMoveHook) {
            await this.props.postMoveHook(this.game);
        }
    };

    onMouseOverSquare = (square) => {
        // get list of possible moves for this square
        let moves = this.game.moves({
            square: square,
            verbose: true,
        });

        // exit if there are no moves available for this square
        if (moves.length === 0) return;

        let squaresToHighlight = [];
        for (var i = 0; i < moves.length; i++) {
            squaresToHighlight.push(moves[i].to);
        }

        this.highlightSquare(square, squaresToHighlight);
    };

    onMouseOutSquare = (square) => this.removeHighlightSquare(square);

    // central squares get diff dropSquareStyles
    onDragOverSquare = (square) => {
        this.setState({
            dropSquareStyle:
                square === 'e4' || square === 'd4' || square === 'e5' || square === 'd5'
                    ? { backgroundColor: 'cornFlowerBlue' }
                    : { boxShadow: 'inset 0 0 1px 4px rgb(255, 255, 0)' },
        });
    };

    onSquareClick = async (square) => {
        this.setState(({ history }) => ({
            squareStyles: squareStyling({ pieceSquare: square, history }),
            pieceSquare: square,
        }));

        let move = this.game.move({
            from: this.state.pieceSquare,
            to: square,
            promotion: 'q', // always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return;

        this.setState({
            fen: this.game.fen(),
            history: this.game.history({ verbose: true }),
            pieceSquare: '',
        });

        await this.props.postMoveHook(this.game);
    };

    onSquareRightClick = (square) =>
        this.setState({
            squareStyles: { [square]: { backgroundColor: 'deepPink' } },
        });

    render() {
        const { fen, dropSquareStyle, squareStyles, undo } = this.state;

        return this.props.children({
            squareStyles,
            position: fen,
            onMouseOverSquare: this.onMouseOverSquare,
            onMouseOutSquare: this.onMouseOutSquare,
            onDrop: this.onDrop,
            dropSquareStyle,
            onDragOverSquare: this.onDragOverSquare,
            onSquareClick: this.onSquareClick,
            onSquareRightClick: this.onSquareRightClick,
            undo: undo,
            orientation: this.props.setOrientation,
        });
    }
}

function WithMoveValidation({ postMoveHook, setFen, setOrientation, firstMove, moveList }) {
    const [pointer, setPointer] = useState('grab');

    const changeCursor = () => {
        setPointer((prevState) => {
            if (prevState === 'grab') {
                return 'grabbing';
            }
            return 'grab';
        });
    };
    return (
        <div>
            <HumanVsHuman
                postMoveHook={postMoveHook}
                setFen={setFen}
                setOrientation={setOrientation}
                firstMove={firstMove}
                moveList={moveList}
            >
                {({
                    position,
                    onDrop,
                    onMouseOverSquare,
                    onMouseOutSquare,
                    squareStyles,
                    dropSquareStyle,
                    onDragOverSquare,
                    onSquareClick,
                    onSquareRightClick,
                    undo,
                    orientation,
                }) => (
                    <Chessboard
                        id="humanVsHuman"
                        width={500}
                        position={position}
                        onDrop={onDrop}
                        onMouseOverSquare={onMouseOverSquare}
                        onMouseOutSquare={onMouseOutSquare}
                        boardStyle={{
                            borderRadius: '5px',
                            boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                        }}
                        squareStyles={squareStyles}
                        dropSquareStyle={dropSquareStyle}
                        onDragOverSquare={onDragOverSquare}
                        onSquareClick={onSquareClick}
                        onSquareRightClick={onSquareRightClick}
                        undo={undo}
                        orientation={orientation}
                        onPieceClick={changeCursor}
                        style={{ cursor: pointer }}
                    />
                )}
            </HumanVsHuman>
        </div>
    );
}

const squareStyling = ({ pieceSquare, history }) => {
    const sourceSquare = history.length && history[history.length - 1].from;
    const targetSquare = history.length && history[history.length - 1].to;

    return {
        [pieceSquare]: { backgroundColor: 'rgba(255, 255, 0, 0.4)' },
        ...(history.length && {
            [sourceSquare]: {
                backgroundColor: 'rgba(255, 255, 0, 0.4)',
            },
        }),
        ...(history.length && {
            [targetSquare]: {
                backgroundColor: 'rgba(255, 255, 0, 0.4)',
            },
        }),
    };
};

export default WithMoveValidation;
