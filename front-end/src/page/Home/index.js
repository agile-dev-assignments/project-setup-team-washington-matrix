import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Grid, Button } from 'semantic-ui-react';
import PlayModal from '../../components/PlayModal';
import SidebarPerm from '../../components/SidebarPerm';

const Home = () => {
    return (
        <div>
            <SidebarPerm
                buttongroup={
                    <Button.Group size="large" color="grey">
                        <Button as={Link} to="/login">
                            Log in
                        </Button>
                        <Button.Or />
                        <Button as={Link} to="/signup">
                            Sign Up
                        </Button>
                    </Button.Group>
                }
                id="sidebarneedsstyle"
            >
                <Grid className="univbackground">
                    <Grid.Row style={{ height: '40vh' }} />
                    <Grid.Row centered>
                        <PlayModal buttonText="Play Against the Computer" />
                    </Grid.Row>
                    <Grid.Row centered>
                        <PlayModal buttonText="Play Locally" />
                    </Grid.Row>
                    <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                </Grid>
            </SidebarPerm>
        </div>
    );
};

export default Home;
