import React from 'react';
import './style.css';
import { Grid, Button } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import Chess from 'chess.js';

const boardstate = new Chess();
const axios = require('axios');
const imgsrc = '/img/chesslogoQueen.png';

axios
    .get('https://lichess.org/api/puzzle/daily')
    .then((response) => {
        boardstate.load_pgn(response.data.game.pgn);
    })
    .catch((error) => {
        console.log(error);
    });

class Puzzles extends React.Component {
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
                            <WithMoveValidation
                                postMoveHook={this.postMoveHook}
                                setFen={boardstate.fen()}
                            />
                        </Grid.Row>
                        <Grid.Row style={{ height: '40vh' }}></Grid.Row>
                    </Grid>
                </SidebarPerm>
            </div>
        );
    }
}

export default Puzzles;
