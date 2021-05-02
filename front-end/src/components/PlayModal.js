import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Icon, Menu } from 'semantic-ui-react';
import axios from 'axios';

class PlayModal extends React.Component {
    constructor(props) {
        super(props);
        this.postClick = this.postClick.bind(this);
        this.state = {
            open: false,
            activeItem: '3 min',
            activeItem2: 'white',
        };
    }

    postClick() {
        axios
            .post('http://localhost:4000/game/create', {
                timeControl: this.state.activeItem,
                playerSide: this.state.activeItem2,
            })
            .then((response) => {
                console.log(response);
            });
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
        if (this.props.buttonText === 'Play Locally') {
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
                    <Modal.Content className="modalalign" style={{ margin: '0px' }}>
                        <Button
                            as={Menu.Item}
                            name="3 min"
                            size="massive"
                            color={activeItem === '3 min' ? 'blue' : null}
                            active={activeItem === '3 min'}
                            onClick={this.handleItemClick}
                        >
                            3 min
                        </Button>
                        <Button
                            as={Menu.Item}
                            name="4 min"
                            size="massive"
                            color={activeItem === '4 min' ? 'blue' : null}
                            active={activeItem === '4 min'}
                            onClick={this.handleItemClick}
                        >
                            4 min
                        </Button>
                        <Button
                            as={Menu.Item}
                            name="5 min"
                            size="massive"
                            color={activeItem === '5 min' ? 'blue' : null}
                            active={activeItem === '5 min'}
                            onClick={this.handleItemClick}
                        >
                            5 min
                        </Button>
                        <Button
                            as={Menu.Item}
                            name="10 min"
                            size="massive"
                            color={activeItem === '10 min' ? 'blue' : null}
                            active={activeItem === '10 min'}
                            onClick={this.handleItemClick}
                        >
                            10 min
                        </Button>
                        <Button
                            as={Menu.Item}
                            name="15 min"
                            size="massive"
                            color={activeItem === '15 min' ? 'blue' : null}
                            active={activeItem === '15 min'}
                            onClick={this.handleItemClick}
                        >
                            15 min
                        </Button>
                        <br /> <br />
                        <Button
                            as={Menu.Item}
                            name="No Time Limit"
                            size="massive"
                            color={activeItem === 'No Time Limit' ? 'blue' : null}
                            active={activeItem === 'No Time Limit'}
                            onClick={this.handleItemClick}
                        >
                            No Time Limit
                        </Button>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="black" onClick={() => this.toggleOpen(false)}>
                            Not so fast
                        </Button>
                        <Button
                            content="Alright, let's play!"
                            labelPosition="right"
                            icon="play"
                            as={Link}
                            to="/playlocal"
                            onClick={this.postClick}
                            positive
                        />
                    </Modal.Actions>
                </Modal>
            );
        }
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
                <Modal.Content className="modalalign" style={{ margin: '0px' }}>
                    <Button
                        as={Menu.Item}
                        name="3 min"
                        size="massive"
                        color={activeItem === '3 min' ? 'blue' : null}
                        active={activeItem === '3 min'}
                        onClick={this.handleItemClick}
                    >
                        3 min
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="4 min"
                        size="massive"
                        color={activeItem === '4 min' ? 'blue' : null}
                        active={activeItem === '4 min'}
                        onClick={this.handleItemClick}
                    >
                        4 min
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="5 min"
                        size="massive"
                        color={activeItem === '5 min' ? 'blue' : null}
                        active={activeItem === '5 min'}
                        onClick={this.handleItemClick}
                    >
                        5 min
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="10 min"
                        size="massive"
                        color={activeItem === '10 min' ? 'blue' : null}
                        active={activeItem === '10 min'}
                        onClick={this.handleItemClick}
                    >
                        10 min
                    </Button>
                    <Button
                        as={Menu.Item}
                        name="15 min"
                        size="massive"
                        color={activeItem === '15 min' ? 'blue' : null}
                        active={activeItem === '15 min'}
                        onClick={this.handleItemClick}
                    >
                        15 min
                    </Button>
                    <br /> <br />
                    <Button
                        as={Menu.Item}
                        name="No Time Limit"
                        size="massive"
                        color={activeItem === 'No Time Limit' ? 'blue' : null}
                        active={activeItem === 'No Time Limit'}
                        onClick={this.handleItemClick}
                    >
                        No Time Limit
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
                        as={Link}
                        to="/play"
                        onClick={this.postClick}
                        positive
                    />
                </Modal.Actions>
            </Modal>
        );
    }
}

export default PlayModal;
