import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { 
    Grid,
 } from 'semantic-ui-react';
import SidebarPerm from '../../../../components/SidebarPerm';
import WithMoveValidation from './../../../../components/boards/WithMoveValidation';


const imgsrc = '/img/chesslogoQueen.png';
     
class BasicCheckmates extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
        return (
            <div>
                
                <SidebarPerm id="sidebarneedsstyle">
                <h1 class= "title">
                    Basic Checkmates  
                </h1>
                <div class="ui compact menu">
                    <div class="ui simple dropdown item">
                        Basic Checkmates    
                        <i class="dropdown icon"></i>
                        <div class="menu">
                            <div class="item" data-value="1">Smothered</div>
                            <div class="item" data-value="2">Back Rank</div>
                            <div class="item" data-value="3">Scholars</div>
                            <div class="item" data-value="4">Fools</div>
                            <div class="item" data-value="5">Mate with Queen and King</div>
                            <div class="item" data-value="6">Mate with two Rooks</div>
                            <div class="item" data-value="7">Mate with King and Rook</div>
                        </div>
                    </div>
                </div>
                

                <div id= "board" className="practice-container">
                    <WithMoveValidation />
                </div>    

                <Grid className='univbackground'>
                    <Grid.Row style={{height: '110vh'}}>
                    </Grid.Row>
                </Grid>
                </SidebarPerm>  

                <div id="textbox">
                    <p>Text about the checkmates</p>
                </div> 

            </div>
            
        )
    }
}
export default BasicCheckmates;