import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Form, Button, Grid, Image, Segment, Message } from 'semantic-ui-react';
import './style.css';
import SidebarPerm from '../../components/SidebarPerm';

const Signup = () => (
    <SidebarPerm id="sidebarneedsstyle">
        <Grid textAlign="center" style={{ height: '50vh' }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                    <Image src="/img/chesslogo.png" /> Create a new account
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="Username" />
                        <Form.Input
                            fluid
                            icon="envelope outline"
                            iconPosition="left"
                            placeholder="Email"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Button color="teal" fluid size="large" type="submit">
                            Signup
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </SidebarPerm>
);

export default Signup;
