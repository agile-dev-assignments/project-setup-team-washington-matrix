import React from 'react';
import { Button, Grid, Table, Progress } from 'semantic-ui-react';
import WithMoveValidation from './../../components/boards/WithMoveValidation';
import Layout from '../../components/Layout';
import './Practice.css';

let evaler = new Worker('stockfish.js');
function uciCmd(cmd, which) {
    (which || evaler).postMessage(cmd);
}
uciCmd('uci');
uciCmd('ucinewgame');
uciCmd('isready');
class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.postMoveHook = this.postMoveHook.bind(this);
        this.state = {
            timer: null,
            game: null,
            history: null,
            playerColor: 'white',
            evalScore: 0,
            mateScore: 0,
        };
    }

    get_moves() {
        let moves = '';
        let history = this.state.history;

        for (let i = 0; i < history.length; ++i) {
            let move = history[i];
            moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
        }

        return moves;
    }

    postMoveHook(game) {
        this.setState({
            game,
            history: game.history({ verbose: true }),
        });
        uciCmd('position startpos moves' + this.get_moves());
        uciCmd('go');
        evaler.onmessage = (event) => {
            let line;
            if (event && typeof event === 'object') {
                line = event.data;
            } else {
                line = event;
            }
            if (line === 'uciok' || line === 'readyok' || line.substr(0, 11) === 'option name') {
                return;
            }
            let match;

            if ((match = line.match(/^info .*\bscore (\w+) (-?\d+)/))) {
                let score = parseInt(match[2], 10) * (game.turn() === 'w' ? 1 : -1);
                let mateScore;
                if (match[1] === 'cp') {
                    mateScore = (score / 100.0).toFixed(2);
                    score = (score / 100.0).toFixed(2);
                } else if (match[1] === 'mate') {
                    mateScore = Math.sign(score) * 100;
                    score = 'Mate in ' + Math.abs(score);
                }
                this.setState({
                    evalScore: score,
                    mateScore: mateScore,
                });
                uciCmd('stop');
            }
        };
    }

    render() {
        return (
            <Layout id="sidebarneedsstyle">
                <Grid>
                    <Grid.Row centered>
                        <div style={{ float: 'left' }}>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        playerColor:
                                            this.state.playerColor === 'white' ? 'black' : 'white',
                                    });
                                }}
                            >
                                Switch Orientation
                            </Button>
                            <br />
                            <br />
                            <br />
                            {this.state.evalScore}
                        </div>
                        <Grid.Column width={6}>
                            <WithMoveValidation
                                postMoveHook={this.postMoveHook}
                                setOrientation={this.state.playerColor}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid centered className="univbackground">
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <div className="table-container">
                                <Table inverted color="grey" celled>
                                    <Progress
                                        total={200}
                                        value={100 + parseFloat(this.state.mateScore)}
                                        active
                                        color="teal"
                                    />
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Ply</Table.HeaderCell>
                                            <Table.HeaderCell>Move</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <div style={{ height: '500px', overflow: 'scroll' }}>
                                            {this.state.history &&
                                                this.state.history.map((move, i) => {
                                                    return (
                                                        <Table.Row>
                                                            <Table.Cell>{i + 1}</Table.Cell>
                                                            <Table.Cell>
                                                                {move.color === 'w'
                                                                    ? 'White'
                                                                    : 'Black'}
                                                                {': '}
                                                                {move.san}
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    );
                                                })}
                                        </div>
                                    </Table.Body>
                                </Table>
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{ height: '40vh' }} />
                </Grid>
            </Layout>
        );
    }
}

export default Practice;
