import React from 'react';
import { Card, Heading, Tag } from '@8base/boost';
import { graphql, Query } from 'react-apollo';
import * as sharedGraphQL from 'shared/graphql';

import { ClientDetails } from './ClientDetails';

const Client = props => (
  <Query query={sharedGraphQL.CLIENT_QUERY} variables={{ id: props.computedMatch.params.id }} >
  {
    ({ loading, error, data }) => {

      return (
        <Card padding="md" stretch>
          <Card.Header>
            <Heading type="h4" text={`Client: ${data.client.firstName} ${data.client.lastName}`} />
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
