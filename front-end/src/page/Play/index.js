import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import './Play.css';
import Layout from '../../components/Layout';
import Stockfish from '../../components/engine/Stockfish';
import Timer from '../../components/Timer';
import Chessboard from 'chessboardjsx';
import axios from 'axios';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.postMoveHook = this.postMoveHook.bind(this);
        this.state = {
            flag: false,
            flag2: false,
            clockPause: false,
            clockPause2: false,
            clockResume: false,
            clockResume2: false,
            timer: null,
            gamestate: null,
            history: null,
            timeControl: null,
            playerColor: null,
            loading: true,
            disabled: false,
            winCond: '',
        };
    }

    componentDidMount() {
        // eslint-disable-next-line
        this.state.timer = setTimeout(() => {
            console.log('waiting for updated document');
            axios.get(process.env.REACT_APP_API_ROUTE + '/game/play').then((response) => {
                this.setState({
                    timeControl: response.data.data.timeControl,
                    playerColor: response.data.data.playerSide,
                    loading: false,
                });
                console.log(response);
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    postMoveHook(game) {
        this.setState({
            gamestate: game,
            history: game.history({ verbose: true }),
        });
        if (this.state.timeControl !== 'No Time Limit') {
            if (game.history().length === 1) {
                if (this.state.playerColor.charAt(0) === game.turn()) {
                    this.setState({ flag: true });
                } else {
                    this.setState({ flag2: true });
                }
            }
            if (game.history().length === 2) {
                if (this.state.playerColor.charAt(0) === game.turn()) {
                    this.setState({
                        clockPause2: true,
                        clockResume: true,
                    });
                } else {
                    this.setState({
                        clockPause: true,
                        clockResume2: true,
                    });
                }
            }
            if (game.history().length > 2) {
                this.setState({
                    flag2: false,
                    flag: false,
                });

                if (this.state.playerColor.charAt(0) === game.turn()) {
                    this.setState({
                        clockPause: false,
                        clockPause2: true,
                        clockResume2: false,
                        clockResume: true,
                    });
                } else {
                    this.setState({
                        clockPause: true,
                        clockPause2: false,
                        clockResume2: true,
                        clockResume: false,
                    });
                }
            }
        }

        if (game.game_over()) {
            this.setState({
                disabled: true,
                clockPause: true,
                clockPause2: true,
                clockResume: false,
                clockResume2: false,
            });
            if (game.in_checkmate()) {
                switch (game.turn()) {
                    case 'w':
                        this.setState({
                            winCond: `Black wins!`,
                        });
                        break;
                    case 'b':
                        this.setState({
                            winCond: `White wins!`,
                        });
                        break;
                    default:
                        this.setState({
                            winCond: `No winner`,
                        });
                }
            } else {
                this.setState({
                    winCond: `It's a draw!`,
                });
            }
        }
    }

    render() {
        const { disabled } = this.state;
        if (this.state.loading) {
            return <p> Loading... </p>;
        }
        if (this.state.timeControl === 'No Time Limit') {
            return (
                <Layout id="sidebarneedsstyle">
                    <Grid className="univbackground">
                        <Grid.Row centered style={disabled ? { opacity: '1' } : { opacity: '0' }}>
                            {this.state.winCond}
                        </Grid.Row>
                        <Grid.Row centered>
                            <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                                <Stockfish
                                    postMoveHook={this.postMoveHook}
                                    playerColor={this.state.playerColor}
                                    depth={1}
                                >
                                    {({ position, onDrop }) => (
                                        <Chessboard
                                            id="stockfish"
                                            position={position}
                                            width={500}
                                            onDrop={onDrop}
                                            orientation={this.state.playerColor}
                                        />
                                    )}
                                </Stockfish>
                            </div>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={12}>
                                <div className="table-container">
                                    <Table inverted color="grey" celled>
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
                        <Grid.Row style={{ height: '100px' }} />
                    </Grid>
                </Layout>
            );
        }

        const time = new Date();
        const timeCont = this.state.timeControl.split(' ');
        time.setSeconds(time.getSeconds() + timeCont[0] * 60);

        return (
            <Layout id="sidebarneedsstyle">
                <Grid className="univbackground">
                    <Grid.Row centered style={disabled ? { opacity: '1' } : { opacity: '0' }}>
                        {this.state.winCond}
                    </Grid.Row>
                    <Grid.Row centered>
                        <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                            <Stockfish
                                postMoveHook={this.postMoveHook}
                                playerColor={this.state.playerColor}
                                depth={1}
                            >
                                {({ position, onDrop }) => (
                                    <Chessboard
                                        id="stockfish"
                                        position={position}
                                        width={500}
                                        onDrop={onDrop}
                                        orientation={this.state.playerColor}
                                    />
                                )}
                            </Stockfish>
                        </div>
                        <Grid.Column>
                            <div
                                style={
                                    this.state.timeControl === 'No Time Limit'
                                        ? { pointerEvents: 'none', opacity: '0.2' }
                                        : {}
                                }
                            >
                                <Timer
                                    expiryTimestamp={time}
                                    startTime={this.state.flag2}
                                    timePause={this.state.clockPause2}
                                    timeResume={this.state.clockResume2}
                                    playerSide={
                                        this.state.playerColor === 'white' ? 'black' : 'white'
                                    }
                                    expired={() => {
                                        this.setState({
                                            disabled: true,
                                            winCond:
                                                this.state.gamestate.turn() === 'w'
                                                    ? 'Black wins!'
                                                    : 'White wins!',
                                        });
                                    }}
                                />
                                <Timer
                                    expiryTimestamp={time}
                                    startTime={this.state.flag}
                                    timePause={this.state.clockPause}
                                    timeResume={this.state.clockResume}
                                    playerSide={this.state.playerColor}
                                    expired={() => {
                                        this.setState({
                                            disabled: true,
                                            winCond:
                                                this.state.gamestate.turn() === 'w'
                                                    ? 'Black wins!'
                                                    : 'White wins!',
                                        });
                                    }}
                                />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={12}>
                            <div className="table-container">
                                <Table inverted color="grey" celled>
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
                    <Grid.Row style={{ height: '100px' }} />
                </Grid>
            </Layout>
        );
    }
}

export default Play;
