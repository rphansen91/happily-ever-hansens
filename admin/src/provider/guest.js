import gql from "graphql-tag";
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  DELETE_MANY,
  GET_MANY_REFERENCE
} from "react-admin";

const omit = (obj, arr) =>
  Object.keys(obj || {}).reduce((acc, c) => {
    if (!arr.includes(c)) acc[c] = obj[c];
    return acc;
  }, {});

const omitNulls = obj =>
  Object.keys(obj || {}).reduce((acc, c) => {
    if (obj[c] !== null) acc[c] = obj[c];
    return acc;
  }, {});

const GuestData = `
    id
    email
    phone
    full_name
    first_name
    last_name
    address {
        street_address
        city
        state
        zip
    }
    meal
    plus_one_id
    is_plus_one
    children_ids
    no_of_children
    is_attending
    is_submitted
`;

const GET_LIST_QUERY = gql`
query GuestList($filter: JSON, $pagination: Pagination, $sort: Sort) {
    get_list_guest(filter: $filter, pagination: $pagination, sort: $sort) {
    data {
        ${GuestData}
    }
    total
    }
}
`;

export default (client, type, params) => {
  switch (type) {
    case GET_LIST:
      return client
        .query({
          query: GET_LIST_QUERY,
          variables: params
        })
        .then(({ data }) => data.get_list_guest);
    case GET_ONE:
      return client
        .query({
          query: gql`
            query Guest($id: String!) {
                get_one_guest(id: $id) {
                    ${GuestData}
                }
            }
        `,
          variables: params
        })
        .then(({ data }) => data.get_one_guest)
        .then(data => ({ data }));
    case GET_MANY:
      return client
        .query({
          query: gql`
            query Guests($ids: [String]!) {
              get_many_guests(ids: $ids) {
                    data {
                        ${GuestData}
                    }
                }
            }
        `,
          variables: params
        })
        .then(({ data }) => data.get_many_guests);
    case CREATE:
      return client
        .mutate({
          mutation: gql`
            mutation CreateGuest ($data: GuestInput) {
                create_guest(data: $data) {
                    ${GuestData}
                }
            }
        `,
          update: cache => cache.reset(),
          variables: params
        })
        .then(({ data }) => data.create_guest)
        .then(data => ({ data }));
    case UPDATE:
      const id = params.id;
      const data = omit(params.data, [
        "id",
        "full_name",
        "is_plus_one",
        "no_of_children",
        "children",
        "__typename"
      ]);
      const address = omit(params.data.address, ["__typename"]);
      return client
        .mutate({
          mutation: gql`
          mutation UpdateGuest ($id: String!, $data: GuestUpdate) {
              update_guest(id: $id, data: $data) {
                  ${GuestData}
              }
          }
      `,
          variables: {
            id,
            data: Object.assign({}, data, { address })
          }
        })
        .then(({ data }) => data.update_guest)
        .then(data => console.log(data) || { data });
    case DELETE:
      return client
        .mutate({
          mutation: gql`
            mutation DeleteGuest($id: String!, $data: GuestUpdate) {
                delete_guest(id: $id, data: $data) {
                    ${GuestData}
                }
            }
          `,
          variables: params
        })
        .then(({ data }) => data.delete_guest)
        .then(data => ({ data }));
    case DELETE_MANY:
      return client
        .mutate({
          mutation: gql`
            mutation DeleteGuest($ids: [String]) {
              delete_many_guests(ids: $ids)
            }
          `,
          variables: params
        })
        .then(({ data }) => data.delete_many_guests)
        .then(data => ({ data }));
    default:
      return {};
  }
};
