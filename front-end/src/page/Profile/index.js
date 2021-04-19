import React from 'react';
import './style.css';
import profilepic from './profile.png';
import { Grid, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Edit from '../../components/EditModal';

const Line = () => (
    <hr
        style={{
            color: 'lightgray',
            backgroundColor: 'lightgray',
            height: 0.1,
        }}
    />
);

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opengame: false,
            openpuzzle: false,
        };
        this.toggleg = this.toggleg.bind(this);
        this.togglep = this.togglep.bind(this);
    }

    toggleg(game) {
        this.setState({ opengame: !this.state.opengame });
    }

    togglep(puzzle) {
        this.setState({ openpuzzle: !this.state.openpuzzle });
    }

    render() {
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
                        <div name="game" onClick={(game) => this.toggleg(game)} className="header">
                            Games
                        </div>
                        {this.state.opengame ? (
                            <div className="content">
                                <h4>Total Games Played: 48</h4>
                                <h4>Wins: 32</h4>
                                <h4>Losses: 14</h4>
                            </div>
                        ) : null}
                    </div>

                    <div>
                        <div
                            name="puzzle"
                            onClick={(puzzle) => this.togglep(puzzle)}
                            className="header"
                        >
                            Puzzles
                        </div>
                        {this.state.openpuzzle ? (
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
    }
}

export default Profile;
