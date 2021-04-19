import React from 'react';
import { Form } from 'semantic-ui-react';

export const EditForm = () => {
    return (
        <Form>
            <Form.Field>
                <label>Profile Picture</label>
                <input type="file" />
            </Form.Field>
            <Form.Field>
                <label>Username</label>
                <input />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input />
            </Form.Field>
        </Form>
    );
};
export default EditForm;
