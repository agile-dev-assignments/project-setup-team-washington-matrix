import React from 'react';
import App from "./dropdown";
import "./style.css";

const rootElement = document.getElementById("root");

const imgsrc = '/img/chesslogoQueen.png';
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }



  render() {
        return (
            <div>
                <React.StrictMode>
                   <App />
                </React.StrictMode>
                {/* insert chessboard underneath */}
            </div>
        )
    }
}

export default Profile;