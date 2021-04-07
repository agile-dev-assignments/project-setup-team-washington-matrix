import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';

const imgsrc = '/img/chesslogoQueen.png';

class Puzzles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SidebarPerm id="sidebarneedsstyle">
                    <h1 id="title">Puzzles</h1>
                    <Grid className="univbackground">
                        <Grid.Row centered>
                            <Button.Group size="large" color="grey">
                                <Button>Easy</Button>
                                <Button>Medium</Button>
                                <Button>Hard</Button>
                            </Button.Group>
                        </Grid.Row>
                        <Grid.Row centered>
                            <WithMoveValidation />
                        </Grid.Row>
                        <Grid.Row style={{ height: '40vh' }}></Grid.Row>
                    </Grid>
                </SidebarPerm>
            </div>
        );
    }
}

export default Puzzles;
