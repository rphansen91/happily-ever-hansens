const makeGql = require("./make");
const Main = require("./Main");
const Auth = require("./Auth");
const Guest = require("./Guest");

module.exports = makeGql(Main, Auth, Guest);
