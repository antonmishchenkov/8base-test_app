import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, InputField, DateInputField, ModalContext } from '@8base/boost';
import { Query, graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from 'shared/constants';

const CLIENT_CREATE_DIALOG_ID = 'CLIENT_CREATE_DIALOG_ID';

class ClientCreateDialog extends React.Component {
  static contextType = ModalContext;

  onSubmit = async (data) => {
    await this.props.clientCreate({ variables: { data }});

    this.context.closeModal(CLIENT_CREATE_DIALOG_ID);
  };

  onClose = () => {
    this.context.closeModal(CLIENT_CREATE_DIALOG_ID);
  };

  renderFormContent = ({ handleSubmit, invalid, submitting, pristine }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="New Client" onClose={ this.onClose } />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Field
              name="firstName"
              label="First Name"
              placeholder="Type firstname"
              component={ InputField }
              stretch
            />
            <Field
              name="lastName"
              label="Last Name"
              placeholder="Type lastname"
              component={ InputField }
              stretch
            />
            <Field
              name="email"
              label="Email"
              placeholder="Type email"
              component={ InputField }
              stretch
            />
            <Field
              name="phone"
              label="Phone"
              placeholder="Type phone"
              component={ InputField }
              stretch
            />
            <Field
              name="birthday"
              label="Birthday"
              placeholder="Type birthday"
              component={ DateInputField }
              stretch
            />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ this.onClose }>Cancel</Button>
        <Button color="primary" type="submit" loading={ submitting }>Create Client</Button>
      </Dialog.Footer>
    </form>
  );

  render() {
    //console.log(this);
    return (
      <Dialog id={ CLIENT_CREATE_DIALOG_ID } size="sm">
        <Form type="CREATE" tableSchemaName="Clients" onSubmit={ this.onSubmit }>
          { this.renderFormContent }
        </Form>
      </Dialog>
    );
  }
}

ClientCreateDialog = graphql(sharedGraphQL.CLIENT_CREATE_MUTATION, {
  name: 'clientCreate',
  options: {
    refetchQueries: ['ClientsList'],
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Client successfuly created'
    },
  },
})(ClientCreateDialog);

ClientCreateDialog.id = CLIENT_CREATE_DIALOG_ID;

export { ClientCreateDialog };
