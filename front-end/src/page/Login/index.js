import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Header, Grid, Image, Segment, Message } from 'semantic-ui-react';
import './style.css';
import Layout from '../../components/Layout';
import { login } from '../../services/authService';
import { Formik } from 'formik';
import { Form, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react';
import * as Yup from 'yup';
import { getCurrentUser } from '../../services/authService';
import { ToastContainer, toast } from 'react-toastify';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const user = getCurrentUser();
        if (user) {
            setisLoggedIn(true);
        }
        if (localStorage.getItem('justSignedUp')) {
            toast.success('Successfully signup! Log in now!');
            localStorage.removeItem('justSignedUp');
        }
    }, []);
    return (
        <div>
            {isLoggedIn ? (
                <Redirect to="/" />
            ) : (
                <Layout id="sidebarneedsstyle">
                    <ToastContainer />

                    <Grid textAlign="center" style={{ height: '73vh' }} verticalAlign="middle">
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Segment inverted stacked>
                                <Header as="h2" color="teal" textAlign="center">
                                    <Image src="/img/chesslogo.png" /> Login to your account
                                </Header>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={LoginSchema}
                                    onSubmit={(values) => {
                                        login(values.email, values.password)
                                            .then((res) => {
                                                if (res.token) {
                                                    setisLoggedIn(true);
                                                }
                                            })
                                            .catch((err) => {
                                                toast.error('Incorrect username or password');
                                            });
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
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Layout>
            )}
        </div>
    );
};

export default LoginForm;
