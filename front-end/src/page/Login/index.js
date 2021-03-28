import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Form, Button, Grid, Image, Segment, Message} from 'semantic-ui-react';
import './style.css'

const LoginForm = () => (
    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/img/chesslogo.png' /> Login to your account
            </Header>
        <Form size='large'>
            <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Email Address' />
                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                <Button color='teal' fluid size='large' type='submit'>
                    Login
                </Button>
            </Segment>
        </Form>
        <Message >
            New here? <Link to='/signup'>Sign up</Link>
        </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm;
