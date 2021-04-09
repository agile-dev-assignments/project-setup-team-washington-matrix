import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Grid, Dropdown } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';

const imgsrc = '/img/chesslogoQueen.png';
function KingText(props) {
    return <p>Text about King</p>;
}
function QueenText(props) {
    return <p>Text about Queen</p>;
}
function RookText(props) {
    return <p>Text about Rook</p>;
}
function BishopText(props) {
    return <p>Text about Bishop</p>;
}
function KnightText(props) {
    return <p>Text about Knight</p>;
}
function PawnText(props) {
    return <p>Text about Pawn</p>;
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
    },
    {
        key: 2,
        text: 'Queen',
        value: 2,
    },
    {
        key: 3,
        text: 'Rook',
        value: 3,
    },
    {
        key: 4,
        text: 'Bishop',
        value: 4,
    },
    {
        key: 5,
        text: 'Knight',
        value: 5,
    },
    {
        key: 6,
        text: 'Pawn',
        value: 6,
    },
];

class BasicMovements extends React.Component {
    constructor(props) {
        super(props);
        this.state = { piece: 6 };
    }

    handleDropdownClick = (e, data) => this.setState({ piece: data.value });

    render() {
        const { piece } = this.state;
        return (
            <div>
                <SidebarPerm id="sidebarneedsstyle">
                    <h1 class="title">Basic Movements</h1>

                    <Grid style={{ height: '30vh' }}>
                        <Grid.Row centered>
                            <Grid.Column width={6}>
                                <Dropdown
                                    placeholder="Select Option"
                                    fluid
                                    selection
                                    options={pieces}
                                    onChange={this.handleDropdownClick}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={6}>
                                <WithMoveValidation />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={6}>
                                <div id="infotext">
                                    <DisplayedText piece={piece} />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid className="univbackground">
                        <Grid.Row style={{ height: '110vh' }}></Grid.Row>
                    </Grid>
                </SidebarPerm>
            </div>
        );
    }
}

export default BasicMovements;
