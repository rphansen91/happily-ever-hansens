import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import get from "lodash/get";

export const setMealMutation = gql`
  mutation SetMealMutation($id: String!, $meal: Meal!) {
    set_meal(id: $id, meal: $meal) {
      id
      meal
    }
  }
`;

export default Cmp => props => (
  <Mutation
    mutation={setMealMutation}
    key={props.id}
    refetchQueries={() => ["InvitationSearchQuery"]}
  >
    {(setMeal, result) => (
      <Cmp
        {...props}
        {...result}
        setMeal={meal =>
          setMeal({
            variables: {
              id: props.id,
              meal
            }
          })
        }
        value={
          (get(result, "data") || {}).hasOwnProperty("set_meal")
            ? get(result, "data.set_meal.meal")
            : props.value
        }
      />
    )}
  </Mutation>
);
