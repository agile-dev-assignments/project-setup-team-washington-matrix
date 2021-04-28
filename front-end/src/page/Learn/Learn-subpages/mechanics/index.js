import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Grid, Dropdown, Container } from 'semantic-ui-react';
import Layout from '../../../../components/Layout';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';
import LearnSubNav from '../../../../components/LearnSubNav';

function CastlingText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/mechanics/castling').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function EnpassantText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/mechanics/enpassant').then((res) => {
            setData(res.data.data);
        });
        return () => {
            setData('');
        };
    }, []);
    return <p>{data.pieceInfo}</p>;
}

function PawnpromotionText(props) {
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/learn/mechanics/pawnpromotion').then((res) => {
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
            return <CastlingText />;
        case 2:
            return <EnpassantText />;
        case 3:
            return <PawnpromotionText />;
        default:
            return <CastlingText />;
    }
}

const pieces = [
    {
        key: 1,
        text: 'Castling',
        value: 1,
        fen: '8/8/8/8/4P3/1PN5/PBPQ1PPP/R3KBNR w Q - 0 1',
    },
    {
        key: 2,
        text: 'En Passant',
        value: 2,
        fen: 'rnbqkb1r/ppppp1pp/8/3nPp2/3P4/8/PPP2PPP/RNBQKBNR w KQkq f6 0 4',
    },
    {
        key: 3,
        text: 'Pawn Promotion',
        value: 3,
        fen: '2r5/1P6/8/8/8/8/8/8 w - - 0 1',
    },
];

const Mechanics = () => {
    const gameOvers = [
        '8/8/8/8/4P3/1PN5/PBPQ1PPP/2KR1BNR b - - 1 1',
        'rnbqkb1r/ppppp1pp/5P2/3n4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 4',
        '1Qr5/8/8/8/8/8/8/8 b - - 0 1',
        '2Q5/8/8/8/8/8/8/8 b - - 0 1',
    ];
    const handleDropdownClick = async (event, data) => {
        setPieceSelected(data.value);
        setPieceBoard(pieces.find(({ value }) => value === data.value).fen);
        setDisabled(false);
    };
    const [pieceSelected, setPieceSelected] = useState();
    const [pieceBoard, setPieceBoard] = useState(
        pieces.find(({ text }) => text === 'Castling').fen
    );
    const [disabled, setDisabled] = useState(false);
    function postMoveHook(game) {
        if (gameOvers.includes(game.fen())) {
            setDisabled(true);
        }
    }
    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <h1 class="title">Mechanics</h1>

                <Grid className="univbackground">
                    <LearnSubNav />
                    <Grid.Row centered>
                        <Dropdown
                            placeholder="Castling"
                            selection
                            options={pieces}
                            onChange={handleDropdownClick}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <div style={disabled ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
                            <WithMoveValidation postMoveHook={postMoveHook} setFen={pieceBoard} />
                        </div>
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

export default Mechanics;
