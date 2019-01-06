import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import get from "lodash/get";

export const setIsAttendingMutation = gql`
  mutation SetIsAttendingMutation($id: String!, $is_attending: Boolean!) {
    set_is_attending(id: $id, is_attending: $is_attending) {
      id
      is_attending
    }
  }
`;

export default Cmp => props => (
  <Mutation
    mutation={setIsAttendingMutation}
    key={props.id}
    refetchQueries={() => ["InvitationSearchQuery"]}
  >
    {(setIsAttending, result) => (
      <Cmp
        {...props}
        {...result}
        setIsAttending={is_attending =>
          setIsAttending({
            variables: {
              id: props.id,
              is_attending
            }
          })
        }
        value={
          (get(result, "data") || {}).hasOwnProperty("set_is_attending")
            ? get(result, "data.set_is_attending.is_attending")
            : props.value
        }
      />
    )}
  </Mutation>
);
