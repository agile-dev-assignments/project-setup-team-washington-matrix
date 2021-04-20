import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Layout from '../../components/Layout';
import { Button, Grid } from 'semantic-ui-react';

const Learn = () => {
    return (
        <Layout id="sidebarneedsstyle">
            <h1 class="LearnTitle">Learn</h1>
            <Grid className="univbackground">
                <Grid.Row style={{ height: '100px' }} />
                <Grid.Row centered>
                    <Button.Group inverted size="massive" color="teal" vertical>
                        <Button as={Link} to="/basic-movements">
                            Basic Movements
                        </Button>
                        <br />
                        <Button as={Link} to="/basic-patterns">
                            Basic Patterns
                        </Button>
                        <br />
                        <Button as={Link} to="/basic-checkmates">
                            Basic Checkmates
                        </Button>
                        <br />
                        <Button as={Link} to="/mechanics">
                            Mechanics
                        </Button>
                        <br />
                        <Button as={Link} to="/puzzles">
                            Puzzles
                        </Button>
                    </Button.Group>
                </Grid.Row>
                <Grid.Row style={{ height: '40vh' }}></Grid.Row>
            </Grid>
        </Layout>
    );
};

export default Learn;
