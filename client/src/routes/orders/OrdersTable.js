import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { compose } from 'recompose';
import * as R from 'ramda';
import { Table, Dropdown, Icon, Menu, withModal } from '@8base/boost';
import { graphql } from 'react-apollo';

import * as sharedGraphQL from 'shared/graphql';

import { OrderCreateDialog } from './OrderCreateDialog';
import { OrderDeleteDialog } from './OrderDeleteDialog';

function getSummPriceForOrder(items) {
  let sum = items ? items.reduce((total, currentValue) => {
      return total + currentValue.product.price;
  }, 0) : 0;

  return sum.toFixed(2);
}

let OrdersTable = ({ orders, openModal, closeModal }) => (
  <Table>
    <Table.Header columns="repeat(6, 1fr) 60px">
      <Table.HeaderCell>Client</Table.HeaderCell>
      <Table.HeaderCell>Address</Table.HeaderCell>
      <Table.HeaderCell>Delivery DT</Table.HeaderCell>
      <Table.HeaderCell>Comment</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Summ Price</Table.HeaderCell>
    </Table.Header>

    <Table.Body loading={ orders.loading } data={ R.pathOr([], ['ordersList', 'items'], orders) }  action="Create Order" onActionClick={() => openModal(OrderCreateDialog.id)}>
      {
        (order) => (
          <Table.BodyRow columns="repeat(6, 1fr) 60px" key={ order.id }>
            <Table.BodyCell>
              { R.pathOr('Unititled', ['client', 'firstName'], order) }
            </Table.BodyCell>
            <Table.BodyCell>
              { R.pathOr('Unititled', ['address'], order) }
            </Table.BodyCell>
            <Table.BodyCell>
              { R.pathOr('Unititled', ['deliveryDt'], order) }
            </Table.BodyCell>
            <Table.BodyCell>
              { R.pathOr('Unititled', ['comment'], order) }
            </Table.BodyCell>
            <Table.BodyCell>
              { R.pathOr('Unititled', ['status'], order) }
            </Table.BodyCell>
            <Table.BodyCell>
              { getSummPriceForOrder(R.pathOr('Unititled', ['orderItems', 'items'], order)) }
            </Table.BodyCell>
            <Table.BodyCell>
              <Dropdown defaultOpen={ false }>
                <Dropdown.Head>
                  <Icon name="More" color="LIGHT_GRAY2" />
                </Dropdown.Head>
                <Dropdown.Body pin="right">
                  {
                    ({ closeDropdown }) => (
                      <Menu>
                        <Menu.Item><NavLink to={`/order/${order.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>Details</NavLink></Menu.Item>
                        <Menu.Item onClick={ () => { openModal(OrderDeleteDialog.id, { id: order.id }); closeDropdown(); } }>Delete</Menu.Item>
                      </Menu>
                    )
                  }
                </Dropdown.Body>
              </Dropdown>
            </Table.BodyCell>
          </Table.BodyRow>
        )
      }
    </Table.Body>
  </Table>
);

OrdersTable = compose(
  withModal,
  graphql(sharedGraphQL.ORDERS_LIST_QUERY, { name: 'orders' }),
)(OrdersTable);

export { OrdersTable };
