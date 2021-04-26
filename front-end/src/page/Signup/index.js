import React, { useState, useEffect } from 'react';
import { Header, Grid, Image, Segment, Message, Container } from 'semantic-ui-react';
import './style.css';
import Layout from '../../components/Layout';
import { Formik } from 'formik';
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import { register } from '../../services/authService';
import * as Yup from 'yup';
import { Redirect } from 'react-router';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {
    const [isSignedUp, setisSignedUp] = useState(false);
    const initialValues = {
        email: '',
        password: '',
        password2: '',
    };
    return (
        <>
            <div>
                {isSignedUp ? (
                    <Redirect to="/login" />
                ) : (
                    <Layout id="sidebarneedsstyle">
                        <ToastContainer />
                        <Grid textAlign="center" style={{ height: '73vh' }} verticalAlign="middle">
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Segment inverted stacked>
                                    <Header as="h2" color="teal" textAlign="center">
                                        <Image src="/img/chesslogo.png" /> Create a new account
                                    </Header>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={SignupSchema}
                                        onSubmit={(values) => {
                                            toast('Creating account...');
                                            register(values.email, values.password).then((res) => {
                                                if (res.data.message === 'Signup successful') {
                                                    localStorage.setItem('justSignedUp', true);
                                                    setisSignedUp(true);
                                                }
                                            });
                                        }}
                                    >
                                        <Form size="large">
                                            <Input
                                                name="email"
                                                icon="user"
                                                iconPosition="left"
                                                placeholder="Email"
                                                errorPrompt
                                            />
                                            <Input
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                icon="lock"
                                                iconPosition="left"
                                                errorPrompt
                                            />
                                            <Input
                                                name="password2"
                                                type="password"
                                                placeholder="Confirm Password"
                                                icon="lock"
                                                iconPosition="left"
                                                errorPrompt
                                            />
                                            <SubmitButton fluid color="teal">
                                                Sign Up!
                                            </SubmitButton>
                                            <ResetButton fluid secondary>
                                                Reset Form
                                            </ResetButton>
                                        </Form>
                                    </Formik>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Layout>
                )}
            </div>
            {isSignedUp && (
                <Container text>
                    <Message positive id="message-styled">
                        <Message.Header id="message-header">Sign Up Successful !!</Message.Header>
                        <p id="message-content">
                            Go to your <b>special offers</b> page to see now.
                        </p>
                    </Message>
                </Container>
            )}
        </>
    );
};

export default Signup;
