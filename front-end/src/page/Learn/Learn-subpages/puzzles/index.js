import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { 
    Grid,
    Button,
 } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';


const imgsrc = '/img/chesslogoQueen.png';
     
class Puzzles extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
        return (
            <div>
                
                <SidebarPerm id="sidebarneedsstyle">
                <h1 id= "title">
                    Puzzles 
                </h1>
                buttongroup={
                <Button.Group id= "difficulty" size='large' color='grey'>
                    <Button as={Link} to='/login'>Easy</Button>
                    <Button as={Link} to='/signup'>Medium</Button>
                    <Button as={Link} to='/signup'>Hard</Button>
                </Button.Group>
                }
                <div id= "board" className="practice-container">
                <WithMoveValidation />
                </div>
                
                <Grid className='univbackground'>
                    <Grid.Row style={{height: '70vh'}}>
                    </Grid.Row>
                </Grid>
                </SidebarPerm>
                
                
            </div>
            
        )
    }
}

export default Puzzles;