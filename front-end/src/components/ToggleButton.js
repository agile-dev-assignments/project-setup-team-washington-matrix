import React from 'react';
import { Button } from 'semantic-ui-react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    toggleActive() {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return (
            <Button
                size="massive"
                color={this.state.active ? `${this.props.activeColor}` : null}
                active={this.state.active}
                onClick={() => {
                    this.toggleActive();
                }}
            >
                {this.props.textContent}
            </Button>
        );
    }
}

export default ToggleButton;
