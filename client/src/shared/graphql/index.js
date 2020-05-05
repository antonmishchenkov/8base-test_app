import gql from 'graphql-tag';

export const BROKER_CREATE_MUTATION = gql`
  mutation BrokerCreate($data: BrokerCreateInput!) {
    brokerCreate(data: $data) {
      id
    }
  }
`;

export const USERS_LIST_QUERY = gql`
  query UsersList {
    usersList {
      items {
        id
        firstName
        lastName
      }
    }
  }
`;

export const BROKER_DELETE_MUTATION = gql`
  mutation BrokerDelete($id: ID!) {
    brokerDelete(data: { id: $id }) {
      success
    }
  }
`;

export const CUSTOMER_CREATE_MUTATION = gql`
  mutation CustomerCreate($data: CustomerCreateInput!) {
    customerCreate(data: $data) {
      id
    }
  }
`;

export const CUSTOMER_DELETE_MUTATION = gql`
  mutation CustomerDelete($id: ID!) {
    customerDelete(data: { id: $id }) {
      success
    }
  }
`;

export const CUSTOMERS_LIST_QUERY = gql`
  query CustomersList {
    customersList {
      items {
        id
        user {
          email
          firstName
          lastName
        }
        purchases {
          count
        }
        sales {
          count
        }
      }
    }
  }
`;

export const LISTING_CREATE_MUTATION = gql`
  mutation ListingCreate($data: ListingCreateInput!) {
    listingCreate(data: $data) {
      id
    }
  }
`;

export const LISTING_UPDATE_MUTATION = gql`
  mutation ListingUpdate($data: ListingUpdateInput!) {
    listingUpdate(data: $data) {
      id
    }
  }
`;

export const LISTING_SHARE_MUTATION = gql`
  mutation ListingShare($id: ID!, $email: String!) {
    listingShare(id: $id, email: $email) {
      success
    }
  }
`;

export const LISTING_DELETE_MUTATION = gql`
  mutation ListingDelete($id: ID!) {
    listingDelete(data: { id: $id }) {
      success
    }
  }
`;

export const BROKERS_LIST_QUERY = gql`
  query BrokersList {
    brokersList {
      items {
        id
        user {
          email
          firstName
          lastName
        }
        listings {
          count
        }
      }
    }
  }
`;

export const LISTINGS_LIST_QUERY = gql`
  query ListingsList($orderBy: [ListingOrderBy], $skip: Int, $first: Int) {
    listingsList(orderBy: $orderBy, skip: $skip, first: $first) {
      items {
        id
        createdAt
        updatedAt
        property {
          id
          title
        }
        broker {
          id
          user {
            firstName
            lastName
          }
        }
        buyer {
          id
          user {
            firstName
            lastName
          }
        }
        seller {
          id
          user {
            firstName
            lastName
          }
        }
        documents {
          items {
            id
            filename
            downloadUrl
          }
        }
        status
        closingDate
        price
      }
      count
    }
  }
`;

export const PROPERTY_DELETE_MUTATION = gql`
  mutation PropertyDelete($id: ID!) {
    propertyDelete(data: { id: $id }) {
      success
    }
  }
`;

export const PROPERTY_CREATE_MUTATION = gql`
  mutation PropertyCreate($data: PropertyCreateInput!) {
    propertyCreate(data: $data) {
      id
    }
  }
`;

export const PROPERTY_UPDATE_MUTATION = gql`
  mutation PropertyUpdate($data: PropertyUpdateInput!) {
    propertyUpdate(data: $data) {
      id
    }
  }
`;

export const PROPERTIES_LIST_QUERY = gql`
  query PropertiesList {
    propertiesList {
      items {
        id
        createdAt
        updatedAt
        pictures {
          items {
            id
            downloadUrl
            shareUrl
          }
        }
        bedrooms
        title
        description
        sqFootage
        bathrooms
        garage
        pool
      }
    }
  }
`;

// ----------------------
export const CLIENTS_LIST_QUERY = gql`
  query ClientsList {
    clientsList {
      items {
        id
        lastName
        firstName
        email
        phone
        birthday
      }
    }
  }
`;

export const CLIENT_QUERY = gql`
  query Client($id: ID!) {
    client(id: $id) {
      firstName
      lastName
      email
      birthday
      phone
      orders {
        items {
          id
          address
          deliveryDt
          comment
          status
        }
      }
    }
  }
`;

export const CLIENT_CREATE_MUTATION = gql`
  mutation ClientCreate($data: ClientCreateInput!) {
    clientCreate(data: $data) {
      id
    }
  }
`;

export const CLIENT_UPDATE_MUTATION = gql`
  mutation ClientUpdate($data: ClientUpdateInput!) {
    clientUpdate(data: $data) {
      id
    }
  }
`;

export const CLIENT_DELETE_MUTATION = gql`
  mutation ClientDelete($id: ID!) {
    clientDelete(data: { id: $id }) {
      success
    }
  }
`;

export const ORDERS_LIST_QUERY = gql`
  query OrdersList {
    ordersList {
      items {
        id
        client {
          firstName
        }
        address
        deliveryDt
        comment
        status
        orderItems {
          items {
            product {
              price
            }
          }
        }
      }
    }
  }
`;

export const ORDER_QUERY = gql`
  query Order($id: ID!) {
    order(id: $id) {
      client {
        id
        firstName
        lastName
      }
      address
      deliveryDt
      comment
      status
    }
  }
`;

export const ORDER_CREATE_MUTATION = gql`
  mutation OrderCreate($data: OrderCreateInput!) {
    orderCreate(data: $data) {
      id
    }
  }
`;

export const ORDER_DELETE_MUTATION = gql`
  mutation OrderDelete($id: ID!) {
    orderDelete(data: { id: $id }) {
      success
    }
  }
`;

export const PRODUCTS_LIST_QUERY = gql`
  query ProductsList {
    productsList {
      items {
        id
        picture {
          id
          downloadUrl
          shareUrl
        }
        name
        description
        price
      }
    }
  }
`;

export const PRODUCT_CREATE_MUTATION = gql`
  mutation ProductCreate($data: ProductCreateInput!) {
    productCreate(data: $data) {
      id
    }
  }
`;

export const PRODUCT_UPDATE_MUTATION = gql`
  mutation ProductUpdate($data: ProductUpdateInput!) {
    productUpdate(data: $data) {
      id
    }
  }
`;

export const PRODUCT_DELETE_MUTATION = gql`
  mutation ProductDelete($id: ID!) {
    productDelete(data: { id: $id }) {
      success
    }
  }
`;
