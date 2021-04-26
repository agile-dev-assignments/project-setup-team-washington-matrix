import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button, Grid, Image, Segment, Message } from 'semantic-ui-react';
import './style.css';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Formik } from 'formik';
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    return (
        <Layout id="sidebarneedsstyle">
            <Grid textAlign="center" style={{ height: '73vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="teal" textAlign="center">
                        <Image src="/img/chesslogo.png" /> Login to your account
                    </Header>
                    {/* <Form size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email Address"
                            />
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />
                            <Button color="teal" fluid size="large" type="submit">
                                Login
                            </Button>
                        </Segment>
                    </Form> */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            console.log('Form Submit');
                            console.log(values);
                        }}
                    >
                        <Form size="large">
                            <Input
                                name="email"
                                placeholder="Email"
                                icon="user"
                                iconPosition="left"
                                errorPrompt
                            />
                            <Input
                                name="password"
                                type="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                errorPrompt
                            />

                            <SubmitButton fluid color="teal">
                                Login
                            </SubmitButton>
                            <ResetButton fluid secondary>
                                Reset Form
                            </ResetButton>
                        </Form>
                    </Formik>
                    <Message>
                        New here?
                        <Link color="teal" to="/signup">
                            Sign up
                        </Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </Layout>
    );
};

export default LoginForm;
