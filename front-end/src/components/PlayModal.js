import React from 'react';
import { Modal, Button, Icon, Form, Grid, Menu } from 'semantic-ui-react';

class PlayModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            activeItem: 'first',
            activeItem2: 'white',
        };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name });

    toggleOpen(newstate) {
        this.setState({
            open: newstate,
        });
    }

    render() {
        const { activeItem, activeItem2 } = this.state;
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
                    <Button
                        as={Menu.Item}
                        name="first"
                        size="massive"
                        color={activeItem === 'first' ? 'blue' : null}
                        active={activeItem === 'first'}
                        onClick={this.handleItemClick}
                    >
                        3+2
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="second"
                        size="massive"
                        color={activeItem === 'second' ? 'blue' : null}
                        active={activeItem === 'Second'}
                        onClick={this.handleItemClick}
                    >
                        3+5
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="third"
                        size="massive"
                        color={activeItem === 'third' ? 'blue' : null}
                        active={activeItem === 'third'}
                        onClick={this.handleItemClick}
                    >
                        5+5
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="fourth"
                        size="massive"
                        color={activeItem === 'fourth' ? 'blue' : null}
                        active={activeItem === 'fourth'}
                        onClick={this.handleItemClick}
                    >
                        10+15
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="fifth"
                        size="massive"
                        color={activeItem === 'fifth' ? 'blue' : null}
                        active={activeItem === 'fifth'}
                        onClick={this.handleItemClick}
                    >
                        15+15
                    </Button>
                    <br /> <br />
                    <Button.Group size="massive">
                        <Button
                            as={Menu.Item}
                            name="white"
                            size="massive"
                            color={activeItem2 === 'white' ? 'teal' : null}
                            active={activeItem2 === 'white'}
                            onClick={this.handleItemClick2}
                        >
                            <Icon name="chess king" inverted={true} />
                        </Button>
                        <Button.Or />
                        <Button
                            as={Menu.Item}
                            name="random"
                            size="massive"
                            color={activeItem2 === 'random' ? 'teal' : null}
                            active={activeItem2 === 'random'}
                            onClick={this.handleItemClick2}
                        >
                            <Icon name="shuffle" />
                        </Button>
                        <Button.Or />
                        <Button
                            as={Menu.Item}
                            name="black"
                            size="massive"
                            color={activeItem2 === 'black' ? 'teal' : null}
                            active={activeItem2 === 'black'}
                            onClick={this.handleItemClick2}
                        >
                            <Icon name="chess king" />
                        </Button>
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
