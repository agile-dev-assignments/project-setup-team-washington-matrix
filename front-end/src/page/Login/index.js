import React from 'react';
import { 
    Form,
    Button,
    Grid
 } from 'semantic-ui-react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }
    
    render() {
        return (
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Form inverted>
                            <Form.Field required width={6}>
                                <label>Email</label>
                                <input placeholder='Enter Email' />
                            </Form.Field>
                            <Form.Field required width = {6}>
                                <label>Password</label>
                                <input placeholder='Enter Password' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Login;