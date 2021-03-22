import React from 'react';
import { Link } from 'react-router-dom';
import css from '/Users/Abobb/Desktop/project-setup-team-washington-matrix/front-end/src/page/Learn/style.css'
import { 
    Image,
    Sidebar,
    Icon,
    Menu,
    Segment,
    Grid,
    Button,
 } from 'semantic-ui-react';
 const imgsrc = '/img/chesslogo.png';
 const imgsrc2 = '/img/hamburger.png'
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
               <h1 class  = "LearnTitle">Learn</h1>

               <div class="possLink">
                                        <a id="links" href="BasicMovement" >Basic Movement</a>
                                        <br />
                                        <a id="links" href="BasicPatterns" >Basic Patterns</a>
                                        <br />
                                        <a id="links" href="BasicCheckmates" >Basic Checkmates</a>
                                        <br />
                                        <a id="links" href="BasicMechanics" >Basic Mechanics</a>
                                        <br />
                                        <a id="links" href="BasicMovements" >Basic Movements</a>
                                    </div>
                                    {/* Image of logo that links to homepage */}
                                    <div class = "teaChessLogo">
                                        <Image
                                            src={imgsrc}
                                            size='medium'
                                            href='Homepage'
                                            verticalAlign='top'
                                        />
                                        </div>
        </>
        )
    }
}

export default Learn;