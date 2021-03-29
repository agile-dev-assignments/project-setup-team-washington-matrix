import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

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
                <Icon name={this.props.iconName} inverted={this.props.isInverted} />
            </Button>
        );
    }
}

export default ToggleButton;
