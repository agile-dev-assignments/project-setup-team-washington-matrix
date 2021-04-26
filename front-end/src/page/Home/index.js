import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Grid, Button } from 'semantic-ui-react';
import PlayModal from '../../components/PlayModal';
import Layout from '../../components/Layout';
import { getCurrentUser, logout } from '../../services/authService';
const Home = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const handleLogOut = () => {
        logout();
        setCurrentUser(undefined);
    };
    return (
        <div>
            <Layout
                buttongroup={
                    <Button.Group size="large" color="grey">
                        {currentUser ? (
                            <>
                                <Button as={Link} to="/profile">
                                    Profile
                                </Button>
                                <Button.Or />
                                <Button as={Link} to="/" onClick={handleLogOut}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button as={Link} to="/login">
                                    Log in
                                </Button>
                                <Button.Or />
                                <Button as={Link} to="/signup">
                                    Sign Up
                                </Button>
                            </>
                        )}
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
            </Layout>
        </div>
    );
};

export default Home;
