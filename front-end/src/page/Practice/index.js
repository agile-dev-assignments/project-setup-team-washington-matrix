import React from 'react';
import { Grid, Menu, Icon, Segment, Table } from 'semantic-ui-react';

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
            game: null,
            history: null,
        };
    }

    postMoveHook(game) {
        this.setState({
            game,
            history: game.history({ verbose: true }),
        });
    }

    render() {
        const playerColor = 'white';

        return (
            <Layout id="sidebarneedsstyle">
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            {/* <WithMoveValidation postMoveHook={this.postMoveHook} /> */}
                            <Stockfish playerColor={playerColor}>
                                {({ position, onDrop }) => (
                                    <Chessboard
                                        id="stockfish"
                                        position={position}
                                        width={320}
                                        onDrop={onDrop}
                                        orientation={playerColor}
                                    />
                                )}
                            </Stockfish>
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
