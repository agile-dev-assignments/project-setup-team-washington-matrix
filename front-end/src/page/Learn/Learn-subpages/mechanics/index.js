import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SidebarPerm from "../../../../components/SidebarPerm";
import WithMoveValidation from "./../../../../components/boards/WithMoveValidation";

const imgsrc = "/img/chesslogoQueen.png";

class Mechanics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SidebarPerm id="sidebarneedsstyle">
          <h1 class="title">Mechanics</h1>
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              Mechanics
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item" data-value="1">
                  Castling
                </div>
                <div class="item" data-value="2">
                  En Passant
                </div>
                <div class="item" data-value="3">
                  Pawn Promotion
                </div>
              </div>
            </div>
          </div>

          <div id="board" className="practice-container">
            <WithMoveValidation />
          </div>

          <Grid className="univbackground">
            <Grid.Row style={{ height: "110vh" }}></Grid.Row>
          </Grid>
        </SidebarPerm>

        <div id="infotext">
          <p>Text about the mechanics</p>
        </div>
      </div>
    );
  }
}

export default Mechanics;
