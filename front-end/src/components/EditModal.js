import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import Form from './EditForm';

function EditModal() {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <button class="circular ui icon button" style={{ color: 'teal' }}>
                    <i class="icon edit"></i>
                </button>
            }
            size={'large'}
        >
            <Modal.Header>Edit Profile</Modal.Header>
            <Modal.Content className="modalalign" style={{ margin: '0px', textcolor: 'black' }}>
                <Modal.Description>
                    <Form />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    color="teal"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                >
                    Save Changes
                    <Icon checkmark icon="checkmark" />
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default EditModal;
