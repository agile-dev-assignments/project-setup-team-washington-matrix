import React, { useEffect, useState } from 'react';
import './style.css';
import profilepic from './profile.png';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Edit from '../../components/EditModal';
import { getUserProfile } from '../../services/userService';
// import { Redirect } from 'react-router-dom';
const Line = () => (
    <hr
        style={{
            color: 'lightgray',
            backgroundColor: 'lightgray',
            height: 0.1,
        }}
    />
);

const Profile = () => {
    const [openGame, setopenGame] = useState(false);
    const [openPuzzle, setopenPuzzle] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    const toggleOpenGame = () => {
        setopenGame(!openGame);
    };

    const toggleOpenPuzzle = () => {
        setopenPuzzle(!openPuzzle);
    };

    useEffect(() => {
        getUserProfile().then((res) => {
            setCurrentUser(res.data.user);
        });
    }, [currentUser]);

    return (
        <div>
            {currentUser ? (
                <div>
                    <Layout id="sidebarneedsstyle">
                        <div>
                            <div id="edit">
                                <Edit />
                            </div>
                            <Image id="propic" src={profilepic} alt="ProfilePic" />
                            <div>
                                <h2 id="user">{currentUser.email}</h2>
                                <h2 id="user">{currentUser.username}</h2>
                            </div>
                        </div>
                        <Line />
                        <div>
                            <div name="game" onClick={toggleOpenGame} className="header">
                                Games
                            </div>
                            {openGame ? (
                                <div className="content">
                                    <h4>Total Games Played: 1</h4>
                                    <h4>Wins: 1</h4>
                                    <h4>Losses: 0</h4>
                                </div>
                            ) : null}
                        </div>

                        <div>
                            <div name="puzzle" onClick={toggleOpenPuzzle} className="header">
                                Puzzles
                            </div>
                            {openPuzzle ? (
                                <div className="content">
                                    <h4>Total Puzzles Completed: 152</h4>
                                </div>
                            ) : null}
                            {/* i'm assuming we will have more info about statistics */}
                        </div>
                    </Layout>
                    <Grid className="univbackground">
                        <Grid.Row style={{ height: '50vh' }}></Grid.Row>
                    </Grid>
                </div>
            ) : (
                <h1>Not signed in</h1>
            )}
        </div>
    );
};

export default Profile;
