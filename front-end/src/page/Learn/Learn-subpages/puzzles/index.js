import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Button, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import LearnSubNav from '../../../../components/LearnSubNav';
import Chess from 'chess.js';
import axios from 'axios';

const Puzzles = () => {
    const [isLoading, setLoading] = useState(true);
    const [boardState, setBoardState] = useState();
    const [rating, setRating] = useState();
    const [theme, setTheme] = useState();
    const [gameUrl, setGameUrl] = useState();
    const [moves, setMoves] = useState();
    const [disabled, setDisabled] = useState(false);
    const [orient, setOrient] = useState();
    function postMoveHook(game) {
        if (game.game_over()) {
            setDisabled(true);
        }
    }

    useEffect(() => {
        axios
            .get('http://localhost:4000/learn/puzzles')
            .then((response) => {
                let tokens = response.data.data.puzzleFen.split(' ');
                switch (tokens[1]) {
                    case 'w':
                        setOrient('black');
                        break;
                    case 'b':
                        setOrient('white');
                        break;
                    default:
                        setOrient('white');
                }
                setBoardState(response.data.data.puzzleFen);
                setRating(response.data.data.puzzleRating);
                setTheme(response.data.data.puzzleTheme);
                setGameUrl(response.data.data.puzzleSource);
                setMoves(response.data.data.puzzleMoves);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) {
        return <p> Loading...</p>;
    }
    let moveList = moves.split(' ');
    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 id="title">Puzzles</h1>
                <Grid padded className="univbackground">
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Grid.Column width={5}>
                            <Container text>Rating:{rating}</Container>
                            <br />
                            <Container text>
                                Theme: <br /> {theme}
                            </Container>
                            <br />
                            <Container text>Source: {gameUrl}</Container>
                            <br />
                            <Button
                                onClick={() => {
                                    window.location.reload();
                                    setDisabled(false);
                                }}
                            >
                                New Puzzle
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                                <WithMoveValidation
                                    postMoveHook={postMoveHook}
                                    setFen={boardState}
                                    setOrientation={orient}
                                    firstMove={moveList[0]}
                                />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ height: '40vh' }}></Grid.Row>
                </Grid>
            </Layout>
        </div>
    );
};

export default Puzzles;
