import React from 'react';
import { Link } from 'react-router-dom';
import css from './style.css'
import SidebarPerm from '../../components/SidebarPerm';
import { Grid, GridRow } from 'semantic-ui-react';
class Learn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            visible: false,
        }
        
    }
    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }
    
    
    
    render() {
        return (
        <>
            <SidebarPerm id="sidebarneedsstyle"> 
            
                    <h1 class  = "LearnTitle">Learn</h1>
                    <div class="possLink">
                        <a id="links" href="basic-movements" >Basic Movements</a>
                        <br />
                        <a id="links" href="basic-patterns" >Basic Patterns</a>
                        <br />
                        <a id="links" href="mechanics" >Mechanics</a>
                        <br />
                        <a id="links" href="puzzles" >Puzzles</a>
                        <br />
                        <a id="links" href="basic-checkmates" >Basic Checkmates</a>
                        <br />

                     
                    </div>
                    <Grid className='univbackground'>
                    <Grid.Row style={{height: '40vh'}}>
                    </Grid.Row>
                </Grid>
                                              
            </SidebarPerm>

               
        </>
        )
    }
}

export default Learn;