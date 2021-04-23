import React from 'react';
import { Grid, Table } from 'semantic-ui-react';
import axios from 'axios';
import WithMoveValidation from './../../components/boards/WithMoveValidation';
import Layout from '../../components/Layout';
import './Practice.css';
import Stockfish from '../../components/engine/Stockfish';
import Chessboard from 'chessboardjsx';

class Practice extends React.Component {
    constructor(props) {
        super(props);
        this.postMoveHook = this.postMoveHook.bind(this);
        this.state = {
            timer: null,
            game: null,
            history: null,
            timeControl: null,
            playerColor: 'white',
        };
    }

    componentDidMount() {
        this.state.timer = setTimeout(() => {
            console.log('waiting for updated document');
            axios.get('http://localhost:4000/game/play').then((response) => {
                this.setState({
                    timeControl: response.data.data.timeControl,
                    playerColor: response.data.data.playerSide,
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
    }

    render() {
        return (
            <Layout id="sidebarneedsstyle">
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            <WithMoveValidation
                                postMoveHook={this.postMoveHook}
                                setOrientation={this.state.playerColor}
                            />
                            {/*
                                <Stockfish playerColor={playerColor} depth={5}>
                                {({ position, onDrop }) => (
                                    <Chessboard
                                        id="stockfish"
                                        position={position}
                                        width={320}
                                        onDrop={onDrop}
                                        orientation={playerColor}
                                    />
                                )}
                                </Stockfish> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid centered className="univbackground">
                    <Grid.Row>
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

                    <Grid.Row style={{ height: '40vh' }} />
                </Grid>
            </Layout>
        );
    }
}

export default Practice;
