const get = require("lodash/get");
const connect = require("../db/connect")();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = root => {
  const token =
    get(root, "req.headers.Authorization") ||
    get(root, "req.headers.authorization") ||
    get(root, "event.headers.Authorization") ||
    get(root, "event.headers.authorization");

  console.log(get(root, "req.headers"));
  console.log(token);
  let admin;
  try {
    admin = token && jwt.verify(token, secret);
  } catch (e) {
    console.log(e);
  }

  return Promise.all([connect()]).then(([db]) => ({
    admin,
    db
  }));
};
