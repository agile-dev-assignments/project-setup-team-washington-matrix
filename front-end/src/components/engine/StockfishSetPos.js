import { Component } from 'react';
import Chess from 'chess.js'; // import Chess from  "chess.js"(default) if recieving an error about new Chess not being a constructor

const STOCKFISH = window.STOCKFISH;
const game = new Chess();

class Stockfish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fen: 'start',
        };
    }

    componentDidMount() {
        if (this.props.setFen) {
            game.load(this.props.setFen);
        }
        this.setState({
            fen: game.fen(),
        });
        console.log(game.fen());
        this.engineGame().prepareMove();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.setFen !== this.props.setFen) {
            game.load(this.props.setFen);
            this.setState({
                fen: this.props.setFen,
            });
        }
    }

    componentWillUnmount() {
        this.setState({ fen: 'start' });
    }

    onDrop = async ({ sourceSquare, targetSquare }) => {
        // see if the move is legal
        const move = game.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q',
        });

        // illegal move
        if (move === null) return;
        if (this.props.postMoveHook) {
            await this.props.postMoveHook(game);
        }
        return new Promise((resolve) => {
            this.setState({ fen: game.fen() });
            console.log(game.fen());
            resolve();
        }).then(() => this.engineGame().prepareMove());
    };

    engineGame = (options) => {
        options = options || {};

        /// We can load Stockfish via Web Workers or via STOCKFISH() if loaded from a <script> tag.
        let engine =
            typeof STOCKFISH === 'function'
                ? STOCKFISH()
                : new Worker(options.stockfishjs || 'stockfish.js');
        let evaler =
            typeof STOCKFISH === 'function'
                ? STOCKFISH()
                : new Worker(options.stockfishjs || 'stockfish.js');
        let engineStatus = {};
        let time = {
            depth: this.props.depth ? this.props.depth : 10,
            wtime: 3000,
            btime: 3000,
            winc: 1500,
            binc: 1500,
        };
        let playerColor = this.props.playerColor ? this.props.playerColor : 'white';
        let clockTimeoutID = null;
        // let isEngineRunning = false;
        let announced_game_over;

        setInterval(function () {
            if (announced_game_over) {
                return;
            }

            if (game.game_over()) {
                announced_game_over = true;
            }
        }, 500);

        function uciCmd(cmd, which) {
            (which || engine).postMessage(cmd);
        }
        uciCmd('uci');

        function clockTick() {
            let t =
                (time.clockColor === 'white' ? time.wtime : time.btime) +
                time.startTime -
                Date.now();
            let timeToNextSecond = (t % 1000) + 1;
            clockTimeoutID = setTimeout(clockTick, timeToNextSecond);
        }

        function stopClock() {
            if (clockTimeoutID !== null) {
                clearTimeout(clockTimeoutID);
                clockTimeoutID = null;
            }
            if (time.startTime > 0) {
                let elapsed = Date.now() - time.startTime;
                time.startTime = null;
                if (time.clockColor === 'white') {
                    time.wtime = Math.max(0, time.wtime - elapsed);
                } else {
                    time.btime = Math.max(0, time.btime - elapsed);
                }
            }
        }

        function startClock() {
            if (game.turn() === 'w') {
                time.wtime += time.winc;
                time.clockColor = 'white';
            } else {
                time.btime += time.binc;
                time.clockColor = 'black';
            }
            time.startTime = Date.now();
            clockTick();
        }

        const prepareMove = async () => {
            stopClock();
            let turn = game.turn() === 'w' ? 'white' : 'black';
            if (!game.game_over()) {
                if (turn !== playerColor) {
                    uciCmd(`position fen ${game.fen()}`);
                    uciCmd(`position fen ${game.fen()}`, evaler);
                    uciCmd('eval', evaler);

                    if (time && time.wtime) {
                        uciCmd(
                            'go ' +
                                (time.depth ? 'depth ' + time.depth : '') +
                                ' wtime ' +
                                time.wtime +
                                ' winc ' +
                                time.winc +
                                ' btime ' +
                                time.btime +
                                ' binc ' +
                                time.binc
                        );
                    } else {
                        uciCmd('go ' + (time.depth ? 'depth ' + time.depth : ''));
                    }
                }
                if (game.history().length >= 2 && !time.depth && !time.nodes) {
                    startClock();
                }
            }
            if (this.props.postMoveHook) {
                await this.props.postMoveHook(game);
            }
        };

        evaler.onmessage = function (event) {
            let line;

            if (event && typeof event === 'object') {
                line = event.data;
            } else {
                line = event;
            }

            /// Ignore some output.
            if (line === 'uciok' || line === 'readyok' || line.substr(0, 11) === 'option name') {
                return;
            }
        };

        engine.onmessage = (event) => {
            let line;

            if (event && typeof event === 'object') {
                line = event.data;
            } else {
                line = event;
            }

            if (line === 'uciok') {
                engineStatus.engineLoaded = true;
            } else if (line === 'readyok') {
                engineStatus.engineReady = true;
            } else {
                let match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);

                if (match) {
                    // isEngineRunning = false;
                    game.move({ from: match[1], to: match[2], promotion: match[3] });
                    this.setState({ fen: game.fen() });
                    prepareMove();
                    uciCmd('eval', evaler);
                } else if ((match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/))) {
                    engineStatus.search = 'Depth: ' + match[1] + ' Nps: ' + match[2];
                }

                if ((match = line.match(/^info .*\bscore (\w+) (-?\d+)/))) {
                    let score = parseInt(match[2], 10) * (game.turn() === 'w' ? 1 : -1);
                    /// Is it measuring in centipawns?
                    if (match[1] === 'cp') {
                        engineStatus.score = (score / 100.0).toFixed(2);
                        /// Did it find a mate?
                    } else if (match[1] === 'mate') {
                        engineStatus.score = 'Mate in ' + Math.abs(score);
                    }

                    /// Is the score bounded?
                    if ((match = line.match(/\b(upper|lower)bound\b/))) {
                        engineStatus.score =
                            ((match[1] === 'upper') === (game.turn() === 'w') ? '<= ' : '>= ') +
                            engineStatus.score;
                    }
                }
            }
            // Display status here
        };

        return {
            start: function () {
                uciCmd('ucinewgame');
                uciCmd('isready');
                engineStatus.engineReady = false;
                engineStatus.search = null;
                prepareMove();
                announced_game_over = false;
            },
            prepareMove: function () {
                prepareMove();
            },
        };
    };

    render() {
        const { fen } = this.state;
        return this.props.children({ position: fen, onDrop: this.onDrop });
    }
}

export default Stockfish;

// Props
// depth
// fen
// playerColor: 'white' or 'black'
// children
