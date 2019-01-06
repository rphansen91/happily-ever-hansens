import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from "react-admin";
import gql from "graphql-tag";

export default client => (type, params) => {
  if (type === AUTH_LOGIN) {
    return client
      .query({
        query: gql`
          query Login($username: String!, $password: String!) {
            login(username: $username, password: $password) {
              token
            }
          }
        `,
        variables: params
      })
      .then(({ data }) => {
        localStorage.setItem("token", data.login.token);
      });
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  }

  return Promise.resolve();
};
