import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Dropdown, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import StockfishSetPos from './../../../../components/engine/StockfishSetPos';
import LearnSubNav from '../../../../components/LearnSubNav';
import Chessboard from 'chessboardjsx';
import axios from 'axios';

function CheckmateText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_ROUTE + '/learn/checkmates').then((res) => {
            setData(res.data.data);
            console.log(data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data[props.matetext]}</p>;
}

function DisplayedText(props) {
    const mate = props.mate;
    switch (mate) {
        case 1:
            return <CheckmateText matetext="smothered" />;
        case 2:
            return <CheckmateText matetext="backrank" />;
        case 3:
            return <CheckmateText matetext="scholars" />;
        case 4:
            return <CheckmateText matetext="fool" />;
        case 5:
            return <CheckmateText matetext="kqmate" />;
        case 6:
            return <CheckmateText matetext="tworooks" />;
        case 7:
            return <CheckmateText matetext="krmate" />;
        default:
            return <CheckmateText matetext="smothered" />;
    }
}

const mates = [
    {
        key: 1,
        text: 'Smothered',
        value: 1,
        fen: '1r4k1/4b1pp/p2p1P2/2rP4/3Q3P/n1B2P1B/PPq5/K2R2R1 b - - 0 29',
        orientation: 'black',
        moveList: ['c2b1', 'd1b1', 'a3c2'],
    },
    {
        key: 2,
        text: 'Back Rank',
        value: 2,
        fen: '3r2kr/1p3ppp/pN3b2/2Q1pN2/4P3/8/PPP1nPPP/1K1R4 b - - 0 20',
        orientation: 'black',
        moveList: ['d8d1'],
    },
    {
        key: 3,
        text: "Scholar's",
        value: 3,
        fen: 'r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 0 4',
        orientation: 'white',
        moveList: ['f3f7'],
    },
    {
        key: 4,
        text: "Fool's",
        value: 4,
        fen: 'rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq - 0 2',
        orientation: 'black',
        moveList: ['d8h4'],
    },
    {
        key: 5,
        text: 'King and Queen',
        value: 5,
        fen: '4k3/8/8/8/8/8/5Q2/4K3 w - - 0 1',
        orientation: 'white',
        moveList: false,
    },
    {
        key: 6,
        text: '2 Rooks',
        value: 6,
        fen: '8/8/8/8/8/7k/1R6/R3K3 w - - 0 1',
        orientation: 'white',
        moveList: false,
    },
    {
        key: 7,
        text: 'King and Rook',
        value: 7,
        fen: '8/8/8/8/8/7k/4R3/4K3 w - - 0 1',
        orientation: 'white',
        moveList: false,
    },
];

const BasicCheckmates = () => {
    const handleDropdownClick = async (event, data) => {
        setMateSelected(data.value);
        setMateBoard(mates.find(({ value }) => value === data.value).fen);
        setBoardOrient(mates.find(({ value }) => value === data.value).orientation);
        setMoves(mates.find(({ value }) => value === data.value).moveList);
        setDisabled(false);
    };
    const [mateSelected, setMateSelected] = useState(1);
    const [mateBoard, setMateBoard] = useState(mates.find(({ text }) => text === 'Smothered').fen);
    const [moves, setMoves] = useState(mates.find(({ text }) => text === 'Smothered').moveList);
    const [boardOrient, setBoardOrient] = useState('white');
    const [disabled, setDisabled] = useState(false);
    function postMoveHook(game) {
        if (game.game_over()) {
            setDisabled(true);
        }
    }

    if ([5, 6, 7].includes(mateSelected)) {
        return (
            <div>
                <Layout id="sidebarneedsstyle">
                    <h1 class="title">Basic Checkmates</h1>

                    <Grid className="univbackground">
                        <LearnSubNav />
                        <Grid.Row centered>
                            <Dropdown
                                placeholder="Smothered"
                                selection
                                options={mates}
                                onChange={handleDropdownClick}
                            />
                        </Grid.Row>
                        <Grid.Row centered>
                            <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                                <StockfishSetPos
                                    postMoveHook={postMoveHook}
                                    depth={20}
                                    setFen={mateBoard}
                                >
                                    {({ position, onDrop }) => (
                                        <Chessboard
                                            id="stockfish"
                                            position={position}
                                            width={500}
                                            onDrop={onDrop}
                                            orientation={boardOrient}
                                        />
                                    )}
                                </StockfishSetPos>
                            </div>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Container text>
                                <DisplayedText mate={mateSelected} />
                            </Container>
                        </Grid.Row>
                        <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                    </Grid>
                </Layout>
            </div>
        );
    }

    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 class="title">Basic Checkmates</h1>

                <Grid className="univbackground">
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Dropdown
                            placeholder="Smothered"
                            selection
                            options={mates}
                            onChange={handleDropdownClick}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                            <WithMoveValidation
                                postMoveHook={postMoveHook}
                                setFen={mateBoard}
                                setOrientation={boardOrient}
                                moveList={moves}
                            />
                        </div>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Container text>
                            <DisplayedText mate={mateSelected} />
                        </Container>
                    </Grid.Row>
                    <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                </Grid>
            </Layout>
        </div>
    );
};

export default BasicCheckmates;
