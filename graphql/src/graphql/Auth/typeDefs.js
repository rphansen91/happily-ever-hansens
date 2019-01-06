const { default: gql } = require("graphql-tag");

module.exports = gql`
  type Auth {
    token: String
  }

  extend type Query {
    login(username: String!, password: String!): Auth
  }
`;
