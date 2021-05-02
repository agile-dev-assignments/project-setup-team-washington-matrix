import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Dropdown, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import LearnSubNav from '../../../../components/LearnSubNav';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import axios from 'axios';

function PatternText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/patterns').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data[props.patterntext]}</p>;
}

function DisplayedText(props) {
    const pattern = props.pattern;
    switch (pattern) {
        case 1:
            return <PatternText patterntext="pin" />;
        case 2:
            return <PatternText patterntext="fork" />;
        case 3:
            return <PatternText patterntext="discovered" />;
        case 4:
            return <PatternText patterntext="skewer" />;
        case 5:
            return <PatternText patterntext="removeDef" />;
        case 6:
            return <PatternText patterntext="materialAdv" />;
        default:
            return <PatternText patterntext="pin" />;
    }
}

const patterns = [
    {
        key: 1,
        text: 'Pin',
        value: 1,
        fen: '3rr1k1/5ppp/7b/8/8/1P6/PBP5/1K4RR w K - 0 1',
        orientation: 'white',
        moveList: ['h1h6'],
    },
    {
        key: 2,
        text: 'Fork',
        value: 2,
        fen: 'r2qk1nr/pppbbppp/2np4/4p1N1/2B1P3/3P4/PPP2PPP/RNBQK2R w KQkq - 3 6',
        orientation: 'white',
        moveList: ['g5f7', 'd8c8', 'f7h8'],
    },
    {
        key: 3,
        text: 'Discovered Check',
        value: 3,
        fen: '4r2k/2r2p1p/1n4p1/6b1/8/1PN5/PBP5/1K1R3R w - - 0 1',
        orientation: 'white',
        moveList: ['c3b5', 'h8g8', 'b5c7'],
    },
    {
        key: 4,
        text: 'Skewer',
        value: 4,
        fen: '8/pp2R3/8/7k/6p1/P7/1P3K2/7r w - - 0 57',
        orientation: 'white',
        moveList: ['e7h7', 'h5g6', 'h7h1'],
    },
    {
        key: 5,
        text: 'Remove Defender',
        value: 5,
        fen: 'rn3rnk/pp3p1b/2pb2q1/5N1Q/2BP1PP1/2N4P/PP6/R4RK1 w - - 5 19', // https://lichess.org/3i6lRA0M/
        orientation: 'white',
        moveList: ['h5g6', 'f7g6', 'f5d6'],
    },
    {
        key: 6,
        text: 'Material Advantage',
        value: 6,
        fen: '2kr4/ppp2ppp/3rb3/5n2/1P3P2/P1PqP2P/3BBRP1/R2Q2K1 b - - 6 19', // source: https://lichess.org/EASIizUV/
        orientation: 'black',
        moveList: ['d3d2', 'd1d2', 'd6d2'],
    },
];

const BasicPatterns = () => {
    const handleDropdownClick = async (event, data) => {
        setPatternSelected(data.value);
        setPatternBoard(patterns.find(({ value }) => value === data.value).fen);
        setBoardOrient(patterns.find(({ value }) => value === data.value).orientation);
        setMoves(patterns.find(({ value }) => value === data.value).moveList);
        setDisabled(false);
    };
    const [patternSelected, setPatternSelected] = useState(1);
    const [patternBoard, setPatternBoard] = useState(
        patterns.find(({ text }) => text === 'Pin').fen
    );
    const [boardOrient, setBoardOrient] = useState('white');
    const [moves, setMoves] = useState(patterns.find(({ text }) => text === 'Pin').moveList);
    const [disabled, setDisabled] = useState(false);
    function postMoveHook(game) {
        if (game.history().length === moves.length) {
            setDisabled(true);
        }
    }
    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 class="title">Basic Patterns</h1>

                <Grid className="univbackground">
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Dropdown
                            placeholder="Pin"
                            selection
                            options={patterns}
                            onChange={handleDropdownClick}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                            <WithMoveValidation
                                postMoveHook={postMoveHook}
                                setFen={patternBoard}
                                setOrientation={boardOrient}
                                moveList={moves}
                            />
                        </div>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Container text>
                            <DisplayedText pattern={patternSelected} />
                        </Container>
                    </Grid.Row>
                    <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                </Grid>
            </Layout>
        </div>
    );
};

export default BasicPatterns;
