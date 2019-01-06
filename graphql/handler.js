const { ApolloServer } = require("apollo-server-lambda");
const graphqlConfig = require("./src/graphql");
const context = require("./src/graphql/context");

const server = new ApolloServer(Object.assign({}, graphqlConfig, { context }));

module.exports.main = server.createHandler({
  cors: {
    origin: "*",
    credentials: true
  }
});
