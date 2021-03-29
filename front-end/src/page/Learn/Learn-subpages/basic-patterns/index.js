import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SidebarPerm from "../../../../components/SidebarPerm";
import WithMoveValidation from "./../../../../components/boards/WithMoveValidation";

const imgsrc = "/img/chesslogoQueen.png";

class BasicPatterns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SidebarPerm id="sidebarneedsstyle">
          <h1 class="title">Basic Patterns</h1>
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              Basic Patterns
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item" data-value="1">
                  Pin
                </div>
                <div class="item" data-value="2">
                  Fork
                </div>
                <div class="item" data-value="3">
                  Discovered Check
                </div>
                <div class="item" data-value="4">
                  Skewer
                </div>
                <div class="item" data-value="5">
                  Remote Defender
                </div>
                <div class="item" data-value="6">
                  Material Advantage
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
          <p>Text about the patterns</p>
        </div>
      </div>
    );
  }
}

export default BasicPatterns;
