import React from 'react';
import { Card, Heading, Tag } from '@8base/boost';
import { graphql, Query } from 'react-apollo';
import * as sharedGraphQL from 'shared/graphql';

import { ClientDetails } from './ClientDetails';

function getClient(client) {
  return client ? `${client.firstName} ${client.lastName}` : '';
}

const Client = props => (
  <Query query={sharedGraphQL.CLIENT_QUERY} variables={{ id: props.computedMatch.params.id }} >
  {
    ({ loading, error, data }) => {
      if (loading) return <p>Loading…</p>;
      if (error) {
        return <p>Error :(</p>;
      }

      return (
        <Card padding="md" stretch>
          <Card.Header>
            <Heading type="h4" text={`Client: ${getClient(data.client)}`} />
          </Card.Header>

          <Card.Body padding="none" stretch scrollable>
            <ClientDetails client={data.client}/>
          </Card.Body>
        </Card>
      );
    }
  }
  </Query>

);

export { Client };
