import React from 'react';
import WithMoveValidation from './../../components/boards/WithMoveValidation';

class Practice extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="practice-container">
                <WithMoveValidation />
            </div>
        )
    }
}

export default Practice;