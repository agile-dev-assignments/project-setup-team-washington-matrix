import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Button, Container, Reveal, Icon } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import LearnSubNav from '../../../../components/LearnSubNav';
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
    const [gameHistory, setHistory] = useState(1);

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

    function postMoveHook(game) {
        if (game.game_over() || game.history().length === moveList.length) {
            setDisabled(true);
        }
        setHistory(game.history().length);
    }
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
                            <br />
                            <br />
                            <Reveal
                                animated="move up"
                                style={{
                                    border: '0px',
                                    backgroundColor: 'green',
                                    borderRadius: '30px',
                                }}
                            >
                                <Reveal.Content
                                    visible
                                    style={{
                                        border: '0px',
                                        backgroundColor: 'teal',
                                    }}
                                >
                                    <Container>
                                        <Icon name="question circle" />
                                        Hint?
                                    </Container>
                                </Reveal.Content>
                                <Reveal.Content hidden style={{ border: '0px' }}>
                                    <Container textAlign="center">
                                        {moveList[gameHistory]}
                                    </Container>
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                                <WithMoveValidation
                                    postMoveHook={postMoveHook}
                                    setFen={boardState}
                                    setOrientation={orient}
                                    firstMove={moveList[0]}
                                    moveList={moveList}
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
