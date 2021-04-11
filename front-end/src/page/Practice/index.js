import React from 'react';
import WithMoveValidation from './../../components/boards/WithMoveValidation';
import Layout from '../../components/Layout';
import { Grid, Menu, Icon, Segment, Table } from 'semantic-ui-react';
import './Practice.css';

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
        return (
            <Layout id="sidebarneedsstyle">
                <Grid>
                    <Grid.Row centered>
                        <Grid.Column width={6}>
                            <WithMoveValidation postMoveHook={this.postMoveHook} />
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
