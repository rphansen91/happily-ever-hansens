import React, { Component } from "react";
import getDataProvider from "./provider";
import authProvider from "./provider/auth";
import { Admin, Resource } from "react-admin";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import { Dashboard } from "./dashboard";
import { GuestCreate, GuestEdit, GuestList } from "./guests";

class App extends Component {
  constructor(props) {
    super(props);
    this.client = new ApolloClient({
      uri: process.env.REACT_APP_APOLLO_CLIENT,
      request: operation => {
        const token = localStorage.getItem("token");
        operation.setContext({
          headers: {
            ["Authorization"]: token
          }
        });
      }
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <Admin
          title="Meg Ryan Wedding Admin"
          dashboard={Dashboard}
          authProvider={authProvider(this.client)}
          dataProvider={getDataProvider(this.client)}
        >
          <Resource
            name="guest"
            list={GuestList}
            edit={GuestEdit}
            create={GuestCreate}
          />
        </Admin>
      </ApolloProvider>
    );
  }
}

export default App;
