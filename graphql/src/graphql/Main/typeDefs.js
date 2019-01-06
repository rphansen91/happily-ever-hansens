const { default: gql } = require("graphql-tag");

module.exports = gql`
  scalar JSON

  input Pagination {
    page: Int
    perPage: Int
  }

  input Sort {
    field: String
    order: String
  }

  type Query {
    active: Boolean
    ready: Boolean
  }

  type Mutation {
    active: Boolean
    ready: Boolean
  }
`;
