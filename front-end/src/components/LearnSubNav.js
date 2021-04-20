import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid } from 'semantic-ui-react';

const LearnSubNav = (props) => {
    return (
        <Grid padded style={{ width: '100%' }}>
            <Grid.Column>
                <Menu widths={6} style={{ backgroundColor: '#002d3d' }}>
                    <Menu.Item header style={{ color: 'Teal', border: '0px' }}>
                        Learn Pages
                    </Menu.Item>
                    <Menu.Item as={Link} to="/basic-movements" style={{ color: 'Cyan' }}>
                        Basic Movements
                    </Menu.Item>
                    <Menu.Item as={Link} to="/basic-patterns" style={{ color: 'Cyan' }}>
                        Basic Patterns
                    </Menu.Item>
                    <Menu.Item as={Link} to="/basic-checkmates" style={{ color: 'Cyan' }}>
                        Basic Checkmates
                    </Menu.Item>
                    <Menu.Item as={Link} to="/mechanics" style={{ color: 'Cyan' }}>
                        Mechanics
                    </Menu.Item>
                    <Menu.Item as={Link} to="/puzzles" style={{ color: 'Cyan' }}>
                        Puzzles
                    </Menu.Item>
                </Menu>
            </Grid.Column>
        </Grid>
    );
};

export default LearnSubNav;
