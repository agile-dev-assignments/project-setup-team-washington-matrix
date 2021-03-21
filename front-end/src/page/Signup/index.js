import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Form,
    Segment,
    Button,
    Grid
 } from 'semantic-ui-react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    
    render() {
        return (
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Form inverted>
                            <Form.Field required width={6}>
                                <label>Username</label>
                                <input placeholder='Enter Username' />
                            </Form.Field>
                            <Form.Field required width = {6}>
                                <label>Password</label>
                                <input placeholder='Enter Password' />
                            </Form.Field>
                            <Form.Field required width = {6}>
                                <label>Email</label>
                                <input placeholder='Enter Email' />
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          
            
        )
    }
}

export default Signup;