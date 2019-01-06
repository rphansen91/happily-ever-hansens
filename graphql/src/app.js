const { ApolloServer } = require("apollo-server");
const graphqlConfig = require("./graphql");
const context = require("./graphql/context");

const port = process.env.PORT || 3000;
// const mocks = !!process.env.MOCKS;
// console.log(graphqlConfig);
const server = new ApolloServer(
  Object.assign({}, graphqlConfig, {
    mocks: false,
    context
  })
);

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
