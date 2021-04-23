import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Grid, Dropdown, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import LearnSubNav from '../../../../components/LearnSubNav';

function KingText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/king').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function QueenText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/queen').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function RookText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/rook').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function BishopText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/bishop').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function KnightText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/knight').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function PawnText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/movements/pawn').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function DisplayedText(props) {
    const piece = props.piece;
    switch (piece) {
        case 1:
            return <KingText />;
        case 2:
            return <QueenText />;
        case 3:
            return <RookText />;
        case 4:
            return <BishopText />;
        case 5:
            return <KnightText />;
        case 6:
            return <PawnText />;
        default:
            return <PawnText />;
    }
}

const pieces = [
    {
        key: 1,
        text: 'King',
        value: 1,
        fen: '8/1p2p2p/8/8/4K2p/2p3p1/8/8 w - - 0 1',
    },
    {
        key: 2,
        text: 'Queen',
        value: 2,
        fen: '8/1p2p2p/4p3/8/1pp1Q1pp/8/4p3/1p2p2p w - - 0 1',
    },
    {
        key: 3,
        text: 'Rook',
        value: 3,
        fen: 'p5p1/2p1p3/8/8/4R3/8/2p3p1/p6p w - - 0 1',
    },
    {
        key: 4,
        text: 'Bishop',
        value: 4,
        fen: 'p1p1p3/8/p7/7p/p7/7p/2B1p1p1/8 w - - 0 1',
    },
    {
        key: 5,
        text: 'Knight',
        value: 5,
        fen: '8/4p3/2p3p1/p7/3p3p/1p3p2/8/N7 w - - 0 1',
    },
    {
        key: 6,
        text: 'Pawn',
        value: 6,
        fen: '8/1p6/8/2p5/8/3p4/4P3/8 w - - 0 1',
    },
];

const BasicMovements = () => {
    const handleDropdownClick = async (event, data) => {
        console.log(data);
        setPieceSelected(data.value);
        setPieceBoard(pieces.find(({ value }) => value === data.value).fen);
    };
    const [pieceSelected, setPieceSelected] = useState();
    const [pieceBoard, setPieceBoard] = useState(pieces.find(({ text }) => text === 'Pawn').fen);
    console.log(pieceBoard);
    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 class="title">Basic Movements</h1>

                <Grid className="univbackground">
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Dropdown
                            placeholder="Pawn"
                            selection
                            options={pieces}
                            onChange={handleDropdownClick}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <WithMoveValidation setFen={pieceBoard} />
                    </Grid.Row>
                    <Grid.Row centered>
                        <Container text>
                            <DisplayedText piece={pieceSelected} />
                        </Container>
                    </Grid.Row>
                    <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                </Grid>
            </Layout>
        </div>
    );
};

export default BasicMovements;
