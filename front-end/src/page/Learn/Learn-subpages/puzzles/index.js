import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Button } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import Chess from 'chess.js';
import axios from 'axios';

const Puzzles = () => {
    const [isLoading, setLoading] = useState(true);
    const [boardState, setBoardState] = useState();
    const boardstate = new Chess();

    useEffect(() => {
        axios
            .get('http://localhost:4000/learn/puzzles')
            .then((response) => {
                setBoardState(response.data.data.puzzleFen);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <p> Loading...</p>;
    }
    return (
        <div>
            <Layout id="sidebarneedsstyle">
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
                        <WithMoveValidation setFen={boardState} />
                    </Grid.Row>
                    <Grid.Row style={{ height: '40vh' }}></Grid.Row>
                </Grid>
            </Layout>
        </div>
    );
};

export default Puzzles;
