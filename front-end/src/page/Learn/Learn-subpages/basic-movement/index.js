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
        value: 'King',
    },
    {
        key: 2,
        text: 'Queen',
        value: 'Queen',
    },
    {
        key: 3,
        text: 'Rook',
        value: 'Rook',
    },
    {
        key: 4,
        text: 'Bishop',
        value: 'Bishop',
    },
    {
        key: 5,
        text: 'Knight',
        value: 'Knight',
    },
    {
        key: 6,
        text: 'Pawn',
        value: 'Pawn',
    },
];

const DropdownMenu = () => (
    <Dropdown
        placeholder="Select Option"
        fluid
        selection
        options={pieces}
        onChange={handleDropdownClick}
    />
);

const handleDropdownClick = (e, data) => {
    this.setState({ piece: data.key });
};
class BasicMovements extends React.Component {
    constructor(props) {
        super(props);
        this.handleKingClick = this.handleKingClick.bind(this);
        this.handleQueenClick = this.handleQueenClick.bind(this);
        this.handleRookClick = this.handleRookClick.bind(this);
        this.handleBishopClick = this.handleBishopClick.bind(this);
        this.handleKnightClick = this.handleKnightClick.bind(this);
        this.handlePawnClick = this.handlePawnClick.bind(this);
        this.state = { piece: 6 };
    }
    handleKingClick() {
        this.setState({ piece: 1 });
    }
    handleQueenClick() {
        this.setState({ piece: 2 });
    }
    handleRookClick() {
        this.setState({ piece: 3 });
    }
    handleBishopClick() {
        this.setState({ piece: 4 });
    }
    handleKnightClick() {
        this.setState({ piece: 5 });
    }
    handlePawnClick() {
        this.setState({ piece: 6 });
    }

    render() {
        const { piece } = this.state;
        return (
            <div>
                <SidebarPerm id="sidebarneedsstyle">
                    <h1 class="title">Basic Movements</h1>

                    <Grid>
                        <DropdownMenu />
                        <Grid.Row centered>
                            <Grid.Column width={6}>
                                <WithMoveValidation />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Grid className="univbackground">
                        <Grid.Row style={{ height: '110vh' }}></Grid.Row>
                    </Grid>
                </SidebarPerm>

                <div id="infotext">
                    <DisplayedText piece={piece} />
                </div>
            </div>
        );
    }
}

export default BasicMovements;
