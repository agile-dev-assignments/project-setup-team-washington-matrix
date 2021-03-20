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
            

            <div>
                <div className="rightAlign">
                    <div style={{flex: 1}}>
                     <Sidebar.Pushable style={{backgroundColor: '#00141b', height:'1100px'}}>
                            <Sidebar
                                as={Menu}
                                animation='overlay'
                                icon='labeled'
                                inverted
                                onHide ={() => {this.toggleVisible()}}
                                vertical
                                visible={this.state.visible}
                                width='thin'
                                direction='right'
                            >
                                {/* Menu items */}
                                <Menu.Item as={Link} to='/'>
                                <Icon name='chess board' />
                                Play
                                </Menu.Item>
                                <Menu.Item as={Link} to='/learn'>
                                <Icon name='pencil square' />
                                Learn
                                </Menu.Item>
                                <Menu.Item as={Link} to='/practice'>
                                <Icon name='chess' />
                                Practice
                                </Menu.Item>
                                <Menu.Item as={Link} to='/info'>
                                <Icon name='question' />
                                Info
                                </Menu.Item>
                            </Sidebar>
                            {/* Hamburger menu dimmer */}
                            <Sidebar.Pusher dimmed={this.state.visible}>
                                {/* all normal html items go inside of sidebar pusher */}
                                <div class = "hamburger">
                                    <Image 
                                            src={imgsrc2} 
                                            size='large' 
                                            // verticalAlign='top' 
                                            // floated='right' 
                                            onClick={() => {
                                                            this.toggleVisible();
                                                        }}/>
                                </div>
                                                <h1 class  = "LearnTitle">Learn</h1>
                                    {/* links for the basic movements */}
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
                                    
                            </Sidebar.Pusher> 
                               
                        </Sidebar.Pushable>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Learn;