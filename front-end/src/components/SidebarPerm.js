import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Sidebar, Icon, Menu, Grid } from 'semantic-ui-react';
const imgsrc = '/img/chesslogoQueen.png';

const SidebarPerm = (props) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                width="thin"
                direction="right"
            >
                <Menu.Item as={Link} to="/">
                    <Icon name="chess board" />
                    Play
                </Menu.Item>
                <Menu.Item as={Link} to="/learn">
                    <Icon name="pencil square" />
                    Learn
                </Menu.Item>
                <Menu.Item as={Link} to="/practice">
                    <Icon name="chess" />
                    Practice
                </Menu.Item>
                <Menu.Item as={Link} to="/info">
                    <Icon name="question" />
                    Info
                </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={visible}>
                <Grid padded style={{ backgroundColor: '#00141b' }}>
                    <Grid.Row>
                        <Grid.Column width={11}>{props.buttongroup}</Grid.Column>
                        <Grid.Column
                            width={3}
                            floated="right"
                            style={{ position: 'relative', right: '-60px' }}
                        >
                            <Image
                                src={imgsrc}
                                size="medium"
                                verticalAlign="top"
                                as={Link}
                                to="/"
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icon
                                inverted
                                size="massive"
                                name="bars"
                                style={{ position: 'relative', right: '-45px' }}
                                link
                                onClick={() => {
                                    setVisible(!visible);
                                }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row />
                </Grid>
                {props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SidebarPerm;
