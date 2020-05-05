import React from 'react';
import { compose } from 'recompose';
import * as R from 'ramda';
import { Table, Label, Heading, Tag, FlexLayout, Icon, Menu } from '@8base/boost';
import { graphql, Query } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

function getOrders(orders) {
  return orders.items.map(({ id, address, deliveryDt, comment, status }) => (
    <Table.BodyRow columns="repeat(4, 1fr) 60px" key={ id }>
      <Table.BodyCell>{address}</Table.BodyCell>
      <Table.BodyCell>{deliveryDt}</Table.BodyCell>
      <Table.BodyCell>{comment}</Table.BodyCell>
      <Table.BodyCell>{status}</Table.BodyCell>
    </Table.BodyRow>
  ));
}

let ClientDetails = props => (
  <div className="client">
    <div className="client__data">
      <Label text="Email"/>
      <Tag>{`${props.client.email}`}</Tag>
      <Label text="Birthday"/>
      <Tag>{`${props.client.birthday}`}</Tag>
      <Label text="Phone"/>
      <Tag>{`${props.client.phone}`}</Tag>
    </div>
    <div className="client__orders">
      <Label text="Orders" />
      <Table height="300px">
        <Table.Header columns="repeat(4, 1fr) 60px">
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Delivery Dt</Table.HeaderCell>
          <Table.HeaderCell>Comment</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {getOrders(props.client.orders)}
        </Table.Body>
      </Table>
    </div>
  </div>
)

export { ClientDetails }
