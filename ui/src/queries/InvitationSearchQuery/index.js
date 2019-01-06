import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import get from "lodash/get";

export const invitationSearchQuery = gql`
  query InvitationSearchQuery($first_name: String!, $last_name: String!) {
    get_list_guest(
      filter: { first_name: $first_name, last_name: $last_name }
      pagination: { perPage: 1 }
    ) {
      data {
        id
        is_attending
        first_name
        last_name
        meal
        plus_one {
          id
          is_attending
          first_name
          last_name
          meal
        }
        children {
          id
          is_attending
          first_name
          last_name
          meal
        }
        address {
          street_address
          city
          state
          zip
        }
      }
    }
  }
`;

export default Cmp => props => (
  <Query query={invitationSearchQuery} variables={props.invitation}>
    {result => (
      <Cmp
        {...props}
        {...result}
        data={get(result, "data.get_list_guest.data[0]")}
      />
    )}
  </Query>
);
