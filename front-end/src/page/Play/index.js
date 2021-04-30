import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import './Play.css';
// import WithMoveValidation from './../../components/boards/WithMoveValidation';
import Layout from '../../components/Layout';
import Stockfish from '../../components/engine/Stockfish';
import Chessboard from 'chessboardjsx';
import axios from 'axios';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.postMoveHook = this.postMoveHook.bind(this);
        this.state = {
            timer: null,
            game: null,
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
            axios.get('http://localhost:4000/game/play').then((response) => {
                this.setState({
                    timeControl: response.data.data.timeControl,
                    playerColor: response.data.data.playerSide,
                    loading: false,
                });
                console.log(response);
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    postMoveHook(game) {
        this.setState({
            game,
            history: game.history({ verbose: true }),
        });
        if (game.game_over()) {
            this.setState({
                disabled: true,
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
                          winCond: `No winner`
                      })
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
        return (
            <Layout id="sidebarneedsstyle">
                <Grid className="univbackground">
                    <Grid.Row centered style={disabled ? { opacity: '1' } : { opacity: '0' }}>
                        {this.state.winCond}
                    </Grid.Row>
                    <Grid.Row centered>
                        {/* <WithMoveValidation
                                postMoveHook={this.postMoveHook}
                                setOrientation={this.state.playerColor}
                            /> */}
                        <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                            <Stockfish
                                postMoveHook={this.postMoveHook}
                                playerColor={this.state.playerColor}
                                depth={0}
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
                                            <Table.HeaderCell>Color</Table.HeaderCell>
                                            <Table.HeaderCell>Move</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {this.state.history &&
                                            this.state.history.map((move, i) => {
                                                return (
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            {move.color === 'w' ? 'White' : 'Black'}
                                                        </Table.Cell>
                                                        <Table.Cell>{move.to}</Table.Cell>
                                                    </Table.Row>
                                                );
                                            })}
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
