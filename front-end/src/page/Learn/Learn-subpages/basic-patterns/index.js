import React, { useState, useEffect } from 'react';
import './style.css';
import { Grid, Dropdown, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
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
    },
    {
        key: 2,
        text: 'Fork',
        value: 2,
        fen: 'r2qk1nr/ppp2ppp/2np4/2b1p1N1/2B1P1b1/3P4/PPP2PPP/RNBQK2R w KQkq - 2 6',
    },
    {
        key: 3,
        text: 'Discovered Check',
        value: 3,
        fen: '4r2k/2r2p1p/4n1p1/6b1/8/1PN5/PBP5/1K1R3R w K - 0 1',
    },
    {
        key: 4,
        text: 'Skewer',
        value: 4,
        fen: '8/pp2R3/8/7k/6p1/P7/1P3K2/7r w - - 0 57',
    },
    {
        key: 5,
        text: 'Remove Defender',
        value: 5,
        fen: '8/4pp1k/r3b1p1/7p/1pq5/1Q5P/2N2PP1/2R3K1 w - - 0 41', // source:https://lichess.org/ntiafdYa/
    },
    {
        key: 6,
        text: 'Material Advantage',
        value: 6,
        fen: '2kr4/ppp2ppp/3rb3/5n2/1P3P2/P1PqP2P/3BBRP1/R2Q2K1 b - - 6 19', // source: https://lichess.org/EASIizUV/
    },
];

const BasicPatterns = () => {
    const handleDropdownClick = async (event, data) => {
        setPatternSelected(data.value);
        setPatternBoard(patterns.find(({ value }) => value === data.value).fen);
    };
    const [patternSelected, setPatternSelected] = useState(1);
    const [patternBoard, setPatternBoard] = useState(
        patterns.find(({ text }) => text === 'Pin').fen
    );
    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 class="title">Basic Patterns</h1>

                <Grid className="univbackground">
                    <Grid.Row centered>
                        <Dropdown
                            placeholder="Select Option"
                            selection
                            options={patterns}
                            onChange={handleDropdownClick}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <WithMoveValidation setFen={patternBoard} />
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
