import React from 'react';
import Chessboard from 'chessboardjsx';

class Practice extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="practice-container">
                <Chessboard position="start" />
            </div>
        )
    }
}

export default Practice;