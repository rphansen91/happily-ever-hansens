const get = require("lodash/get");
const secret = process.env.SECRET;

module.exports = function isAdmin(cb) {
  return function(a, b, c) {
    if (get(c, "admin.password") === secret) return cb(a, b, c);
    return Promise.reject("Unauthorized");
  };
};
