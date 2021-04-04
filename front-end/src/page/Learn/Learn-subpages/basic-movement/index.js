import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
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
//function text(props){
//   var text;
//   switch(piece){
//     case 1:
//       text = "text about king movement";
//       break;
//     case 2:
//       text = "text about rook movement";
//       break;
//     case 3:
//       text = "text about bishop movement";
//       break;
//     case 4:
//       text = "text about queen movement";
//       break;
//     case 5:
//       text = "text about knight movement";
//       break;
//     case 6:
//       text = "text about pawn movement";
//       break;
//   }
//   alert(text);
// }
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
        const piece = this.state.piece;
        return (
            <div>
                <SidebarPerm id="sidebarneedsstyle">
                    <h1 class="title">Basic Movements</h1>
                    <div class="ui compact menu">
                        <div class="ui simple dropdown item">
                            Basic Movements
                            <i class="dropdown icon"></i>
                            <div class="menu">
                                <div onClick={this.handleKingClick} class="item" data-value="1">
                                    King
                                </div>
                                <div onClick={this.handleRookClick} class="item" data-value="2">
                                    Rook
                                </div>
                                <div onClick={this.handleBishopClick} class="item" data-value="3">
                                    Bishop
                                </div>
                                <div onClick={this.handleQueenClick} class="item" data-value="4">
                                    Queen
                                </div>
                                <div onClick={this.handleKnightClick} class="item" data-value="5">
                                    Knight
                                </div>
                                <div onClick={this.handlePawnClick} class="item" data-value="6">
                                    Pawn
                                </div>
                            </div>
                        </div>
                    </div>

                    <Grid>
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
