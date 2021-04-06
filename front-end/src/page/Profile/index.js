import React from 'react';
import "./style.css";
import profilepic from "./profile.png"
import { Grid, Button,} from "semantic-ui-react";
import SidebarPerm from '../../components/SidebarPerm';

const Line = () => (
    <hr
        style={{
            color: 'lightgray',
            backgroundColor: "lightgray",
            height: .1

        }}
    />
);

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(game){
        this.setState({open: !this.state.open})
    }

    toggle(puzzle){
        this.setState({open: !this.state.open})
    }


    render() {
        return(
            <div>   
                <SidebarPerm id="sidebarneedsstyle">
                    <div>
                        <div>
                            <h2 id="user">Username</h2>
                            <h4 id="name">Name</h4>
                            <img src={profilepic} alt="ProfilePic" />
                            <Button id="edit">
                                Edit
                            </Button>
                        </div>
                    </div>
                    <Line />
                    <div>
                        <div name= "game" onClick ={(game) => this.toggle(game)} className="header">
                            Games
                        </div>
                        {this.state.open?(
                            <div className="content">
                                <h4>Total Games Played: 48</h4>
                                <h4>Wins: 32</h4>
                                <h4>Losses: 14</h4>
                            </div>
                            ): null}
                    </div>
                    
                           
                    <div>

                        <div name="puzzle" onClick ={(puzzle) => this.toggle(puzzle)} className="header">
                            Puzzles
                        </div>
                        {this.state.open?(
                            <div className="content">
                                <h4>Total Puzzles Completed: 152</h4>
                            </div>
                            ): null}
                            {/* i'm assuming we will have more info about statistics */}
                    </div>
                        
                    
                </SidebarPerm>
                <Grid className="univbackground">
                    <Grid.Row style={{ height: "80vh" }}></Grid.Row>
                </Grid>
            </div>
        );  
    }
}

export default Profile;
