import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import IconToggleButton from './IconToggleButton';
import ToggleButton from './ToggleButton';

class PlayModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    toggleOpen(newstate) {
        this.setState({
            open: newstate,
        });
    }

    render() {
        return (
            <Modal
                onClose={() => this.toggleOpen(false)}
                onOpen={() => this.toggleOpen(true)}
                open={this.state.open}
                trigger={<Button size="large">{this.props.buttonText}</Button>}
                dimmer={'blurring'}
            >
                <Modal.Header>
                    <Icon name="chess pawn" />
                    Play Settings
                </Modal.Header>
                <Modal.Content className="modalalign">
                    <ToggleButton activeColor="blue" textContent="3+2" />
                    <ToggleButton activeColor="blue" textContent="3+5" />
                    <ToggleButton activeColor="blue" textContent="5+5" />
                    <ToggleButton activeColor="blue" textContent="10+15" />
                    <ToggleButton activeColor="blue" textContent="15+15" />
                    <br /> <br />
                    <Button.Group size="massive">
                        <IconToggleButton
                            activeColor="teal"
                            iconName="chess king"
                            isInverted="true"
                        />
                        <Button.Or />
                        <IconToggleButton activeColor="teal" iconName="shuffle" />
                        <Button.Or />
                        <IconToggleButton activeColor="teal" iconName="chess king" />
                    </Button.Group>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="black" onClick={() => this.toggleOpen(false)}>
                        Not so fast
                    </Button>
                    <Button
                        content="Alright, let's play!"
                        labelPosition="right"
                        icon="play"
                        onClick={() => this.toggleOpen(false)}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}

export default PlayModal;
