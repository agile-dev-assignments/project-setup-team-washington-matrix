import React, { useState } from 'react';
import { Header, Button, Grid, Image, Segment, Message } from 'semantic-ui-react';
import './style.css';
import Layout from '../../components/Layout';
import axios from 'axios';
import { Formik } from 'formik';
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Signup = () => {
    const initialValues = {
        email: '',
        password: '',
        password2: '',
    };
    return (
        <Layout id="sidebarneedsstyle">
            <Grid textAlign="center" style={{ height: '73vh' }} verticalAlign="middle">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h2" color="teal" textAlign="center">
                        <Image src="/img/chesslogo.png" /> Create a new account
                    </Header>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            console.log('Form Submit');
                            console.log(values);
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
                                Signup
                            </SubmitButton>
                            <ResetButton fluid secondary>
                                Reset Form
                            </ResetButton>
                        </Form>
                    </Formik>
                </Grid.Column>
            </Grid>
        </Layout>
    );
};

export default Signup;
