import React from 'react';
import WithMoveValidation from './../../components/boards/WithMoveValidation';
import SidebarPerm from '../../components/SidebarPerm';
import { Grid, Menu, Icon, Segment, Table } from 'semantic-ui-react';
import './Practice.css'
class Practice extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SidebarPerm id="sidebarneedsstyle">
                <div className="chessboard-wrapper">
                    <div className="chessboard-body">
                        <WithMoveValidation />
                    </div>
                </div>
                <Grid centered className='univbackground'>
                    <Grid.Row>                
                        <Grid.Column width={12}>
                             <div className="table-container">
                                <Table inverted color='grey' celled> 
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Move</Table.HeaderCell>
                                        <Table.HeaderCell>White</Table.HeaderCell>
                                        <Table.HeaderCell>Black</Table.HeaderCell>
                                    </Table.Row>   
                                </Table.Header>
                                
                                <Table.Body>
                                    
                                    <Table.Row>
                                        <Table.Cell>1</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>2</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>3</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>4</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>5</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>6</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>7</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>8</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>9</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>10</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>11</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>12</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>13</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>14</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>15</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                                
                                <Table.Footer>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='3'>
                                        <Menu inverted color='grey'>
                                            <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                            </Menu.Item>
                                            <Menu.Item position='right' as='a' icon>
                                            <Icon name='chevron right' />
                                            </Menu.Item>
                                        </Menu>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                            </div>
                        </Grid.Column>
                        
                    </Grid.Row>
                    

                    <Grid.Row style={{height: '40vh'}}/>
                </Grid>
            </SidebarPerm>
        )
    }
}

export default Practice;