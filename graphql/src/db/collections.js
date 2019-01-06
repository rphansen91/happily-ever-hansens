module.exports = [
  {
    name: "guests",
    init: collection =>
      Promise.all([
        collection.createIndex({ first_name: 1 }),
        collection.createIndex({ last_name: 1 }),
        collection.createIndex(
          { email: 1 },
          {
            unique: 1,
            partialFilterExpression: { email: { $gt: "" } }
          }
        )
      ])
  }
];
