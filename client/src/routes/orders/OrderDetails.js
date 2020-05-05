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
      <Tag style={{ margin: "5px 0 15px 0" }}>{`${props.order.address}`}</Tag>
      <Label text="Delivery Dt"/>
      <Tag style={{ margin: "5px 0 15px 0" }}>{`${props.order.deliveryDt}`}</Tag>
      <Label text="Comment"/>
      <Tag style={{ margin: "5px 0 15px 0" }}>{`${props.order.comment}`}</Tag>
      <Label text="Status"/>
      <Tag style={{ margin: "5px 0 15px 0" }}>{`${props.order.status}`}</Tag>
    </div>
  </div>
)

export { OrderDetails }
