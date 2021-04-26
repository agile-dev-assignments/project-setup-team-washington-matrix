import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Button, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import LearnSubNav from '../../../../components/LearnSubNav';
import Chess from 'chess.js';
import axios from 'axios';

function DisplayedText(props) {
    const text = props.text;
    return text;
}
const Puzzles = () => {
    const [isLoading, setLoading] = useState(true);
    const [boardState, setBoardState] = useState();
    const boardstate = new Chess();
    const [rating, setRating] = useState();
    const [theme, setTheme] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:4000/learn/puzzles')
            .then((response) => {
                setBoardState(response.data.data.puzzleFen);
                setLoading(false);
                setRating(response.data.data.puzzleRating);
                setTheme(response.data.data.puzzleTheme);
                console.log(response.data.data.puzzleRating);
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
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Container text>Rating:{rating}</Container>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Container text>Theme: {theme}</Container>
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
