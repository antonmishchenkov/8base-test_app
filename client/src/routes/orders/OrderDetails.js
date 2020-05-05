import React from 'react';
import { compose } from 'recompose';
import * as R from 'ramda';
import { Table, Label, Heading, Tag, FlexLayout, Icon, Menu } from '@8base/boost';
import { graphql, Query } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

let OrderDetails = props => (
  <div className="client">
    <div className="client__data">
      <Label text="Address"/>
      <Tag>{`${props.order.address}`}</Tag>
      <Label text="Delivery Dt"/>
      <Tag>{`${props.order.deliveryDt}`}</Tag>
      <Label text="Comment"/>
      <Tag>{`${props.order.comment}`}</Tag>
      <Label text="Status"/>
      <Tag>{`${props.order.status}`}</Tag>
    </div>
  </div>
)

export { OrderDetails }
