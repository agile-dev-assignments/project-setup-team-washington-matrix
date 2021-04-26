import React, { useState } from 'react';
import './style.css';
import profilepic from './profile.png';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Edit from '../../components/EditModal';
// import authService from '../../services/authService';

const Line = () => (
    <hr
        style={{
            color: 'lightgray',
            backgroundColor: 'lightgray',
            height: 0.1,
        }}
    />
);

const Profile = (props) => {
    const [openGame, setopenGame] = useState(false);
    const [openPuzzle, setopenPuzzle] = useState(false);

    //     this.toggleg = this.toggleg.bind(this);
    //     this.togglep = this.togglep.bind(this);
    // }

    const toggleOpenGame = () => {
        setopenGame(!openGame);
    };

    const toggleOpenPuzzle = () => {
        setopenPuzzle(!openPuzzle);
    };

    return (
        <div>
            <Layout id="sidebarneedsstyle">
                <div>
                    <div id="edit">
                        <Edit />
                    </div>
                    <Image id="propic" src={profilepic} alt="ProfilePic" />
                    <div>
                        <h2 id="user">Username</h2>
                        <h4 id="name">Name</h4>
                    </div>
                </div>
                <Line />
                <div>
                    <div name="game" onClick={toggleOpenGame} className="header">
                        Games
                    </div>
                    {openGame ? (
                        <div className="content">
                            <h4>Total Games Played: 48</h4>
                            <h4>Wins: 32</h4>
                            <h4>Losses: 14</h4>
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
    );
};

export default Profile;
