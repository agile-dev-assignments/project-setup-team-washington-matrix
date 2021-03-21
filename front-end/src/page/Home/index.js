import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { 
    Image,
    Sidebar,
    Icon,
    Menu,
    Grid,
    Button,
 } from 'semantic-ui-react';
import PlayModal from '../../components/PlayModal';
const imgsrc = '/img/chesslogoQueen.png';
class Home extends React.Component {
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
            <div>
                <Sidebar.Pushable id="sidebarneedsstyle">
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
                    
                    <Sidebar.Pusher dimmed={this.state.visible} >
                        <Grid padded>
                            <Grid.Row>
                                <Grid.Column width={11}>
                                    <Button.Group size='large' color='grey'>
                                        <Button as={Link} to='/login'>Log in</Button>
                                        <Button.Or />
                                        <Button as={Link} to='/signup'>Sign Up</Button>
                                    </Button.Group>
                                </Grid.Column>
                                <Grid.Column width={3} style={{position: 'relative', right: '-60px'}}>
                                    <Image src={imgsrc} size='medium' verticalAlign='top' as={Link} to='/'/>
                                </Grid.Column>
                                <Grid.Column floated='right' width={2}>
                                    <Icon inverted size='massive' name='bars' style={{position: 'relative', right: '-45px'}} link onClick={() => {
                                        this.toggleVisible();
                                    }}/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{height: '40vh'}} />
                            <Grid.Row centered>
                                <PlayModal buttonText='Play Against the Computer' />
                            </Grid.Row>
                            <Grid.Row centered>
                                <PlayModal buttonText='Play Locally' />
                            </Grid.Row>
                            <Grid.Row style={{height: '50vh'}}>
                            </Grid.Row>
                        </Grid>
                    </Sidebar.Pusher>    
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default Home;