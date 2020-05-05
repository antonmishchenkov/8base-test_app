import React from 'react';
import { Card, Heading, Tag } from '@8base/boost';
import { graphql, Query } from 'react-apollo';
import * as sharedGraphQL from 'shared/graphql';

import { OrderDetails } from './OrderDetails';

function getClient(client) {
  return client ? client.firstName : '';
}

const Order = props => (
  <Query query={sharedGraphQL.ORDER_QUERY} variables={{ id: props.computedMatch.params.id }} >
  {
    ({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) {
        return <p>Error :(</p>;
      }

      return (
        <Card padding="md" stretch>
          <Card.Header>
            <Heading type="h4" text={`Order by: ${getClient(data.order.client)}`} />
          </Card.Header>

          <Card.Body padding="none" stretch scrollable>
            <OrderDetails order={data.order}/>
          </Card.Body>
        </Card>
      );
    }
  }
  </Query>

);

export { Order };
