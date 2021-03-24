import React from 'react';
import Dropdown from "./dropdown";
import "./style.css";

const imgsrc = '/img/chesslogoQueen.png';
class BasicCheckmates extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
        return (
            <div>
                   <Dropdown />
                {/* insert chessboard underneath */}
            </div>
        )
    }
}

export default BasicCheckmates;