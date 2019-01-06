const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = {
  Query: {
    login: (_, { username, password }) =>
      password === secret
        ? {
            token: jwt.sign({ username, password }, secret)
          }
        : Promise.reject("Unauthorized")
  }
};
