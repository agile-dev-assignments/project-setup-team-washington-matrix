import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SidebarPerm from "../../../../components/SidebarPerm";
import WithMoveValidation from "./../../../../components/boards/WithMoveValidation";

const imgsrc = "/img/chesslogoQueen.png";
// function text(piece){
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
  }

  render() {
    return (
      <div>
        <SidebarPerm id="sidebarneedsstyle">
          <h1 class="title">Basic Movements</h1>
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              Basic Movements
              <i class="dropdown icon"></i>
              <div class="menu">
                <div onclick="text(this)" class="item" data-value="1">
                  King
                </div>
                <div class="item" data-value="2">
                  Rook
                </div>
                <div class="item" data-value="3">
                  Bishop
                </div>
                <div class="item" data-value="4">
                  Queen
                </div>
                <div class="item" data-value="5">
                  Knight
                </div>
                <div class="item" data-value="6">
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
            <Grid.Row style={{ height: "110vh" }}></Grid.Row>
          </Grid>
        </SidebarPerm>

        <div id="infotext">
          <p>Text about the movements</p>
        </div>
      </div>
    );
  }
}

export default BasicMovements;
