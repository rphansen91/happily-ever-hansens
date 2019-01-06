const { MongoClient } = require("mongodb");
const URI = process.env.MONGO_URI;
const NAME = process.env.MONGO_NAME;
const OPTS = process.env.OPTS ? JSON.parse(process.env.OPTS) : {};
const collections = require("./collections");

const appendCollections = db => {
  return collections.reduce((db, { name }) => {
    db[name] = db.collection(name);
    return db;
  }, db);
};

const initCollections = db => {
  return Promise.all(
    collections.map(({ name, init }) => {
      return init(db[name]);
    })
  );
};

module.exports = function connector({
  uri = URI,
  name = NAME,
  options = OPTS
} = {}) {
  var cachedDb;
  function connect() {
    if (cachedDb && cachedDb.serverConfig.isConnected()) {
      console.log("Using cached");
      return Promise.resolve(cachedDb);
    }

    console.log("Connecting", uri, name);
    return MongoClient.connect(
      uri,
      options
    )
      .then(connection => connection.db(name))
      .then(db => appendCollections(db))
      .then(db => {
        console.log("Connected");
        cachedDb = db;
        return cachedDb;
      });
  }

  connect()
    .then(appendCollections)
    .then(initCollections)
    .catch(err => console.log("Connect err", err));

  return connect;
};
