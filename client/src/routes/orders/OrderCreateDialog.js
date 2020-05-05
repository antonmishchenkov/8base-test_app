import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, SelectField, InputField, DateInputField, ModalContext } from '@8base/boost';
import { DateTime } from 'luxon';
import { Query, graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';
import { TOAST_SUCCESS_MESSAGE } from 'shared/constants';

const ORDER_CREATE_DIALOG_ID = 'ORDER_CREATE_DIALOG_ID';

class OrderCreateDialog extends React.Component {
  static contextType = ModalContext;

  onSubmit = async (data) => {
    await this.props.orderCreate({ variables: { data }});

    this.context.closeModal(ORDER_CREATE_DIALOG_ID);
  };

  onClose = () => {
    this.context.closeModal(ORDER_CREATE_DIALOG_ID);
  };

  renderFormContent = ({ handleSubmit, invalid, submitting, pristine }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="New Order" onClose={ this.onClose } />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
          <Query query={ sharedGraphQL.CLIENTS_LIST_QUERY }>
            {
              ({ data, loading }) => (
                <Field
                  name="client"
                  label="Client"
                  placeholder="Select a client"
                  component={ SelectField }
                  loading={ loading }
                  options={ loading ? [] : (data.clientsList.items || []).map((client) => ({ value: client.id, label: client.firstName })) }
                  stretch
                />
              )
            }
          </Query>
            <Field
              name="address"
              label="Address"
              placeholder="Type address"
              component={ InputField }
              stretch
            />
            <Field
              name="deliveryDt"
              label="Delivery Dt"
              placeholder="Type delivery date"
              component={ DateInputField }
              withTime
              stretch
            />
            <Field
              name="comment"
              label="Comment"
              placeholder="Type comment"
              component={ InputField }
              stretch
            />
            <Field
              name="status"
              label="Status"
              placeholder="Select a status"
              component={ SelectField }
              options={ [
                { label: 'Opened', value: 'Opened' },
                { label: 'Paid', value: 'Paid' },
                { label: 'ReadyToDelivery', value: 'ReadyToDelivery' },
                { label: 'Delivering', value: 'Delivering' },
                { label: 'Closed', value: 'Closed' },
                { label: 'Cancelled', value: 'Cancelled' },
              ] }
              stretch
            />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ this.onClose }>Cancel</Button>
        <Button color="primary" type="submit" loading={ submitting }>Create Order</Button>
      </Dialog.Footer>
    </form>
  );

  render() {
    return (
      <Dialog id={ ORDER_CREATE_DIALOG_ID } size="sm">
        <Form type="CREATE" tableSchemaName="Orders" onSubmit={ this.onSubmit }>
          { this.renderFormContent }
        </Form>
      </Dialog>
    );
  }
}

OrderCreateDialog = graphql(sharedGraphQL.ORDER_CREATE_MUTATION, {
  name: 'orderCreate',
  options: {
    refetchQueries: ['OrdersList'],
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Order successfuly created'
    },
  },
})(OrderCreateDialog);

OrderCreateDialog.id = ORDER_CREATE_DIALOG_ID;

export { OrderCreateDialog };
