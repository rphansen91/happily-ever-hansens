const merge = require("lodash/merge");
const flatten = require("lodash/flatten");

module.exports = (...resources) => ({
  mocks: merge(...resources.map(({ mocks }) => mocks)),
  resolvers: merge(...resources.map(({ resolvers }) => resolvers)),
  typeDefs: flatten(resources.map(({ typeDefs }) => typeDefs))
});
