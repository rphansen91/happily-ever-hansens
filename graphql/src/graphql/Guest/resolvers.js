const { ObjectID } = require("mongodb");
const get = require("lodash/get");
const size = require("lodash/size");
const isAdmin = require("../isAdmin");

const toField = field => (field === "id" ? "_id" : field);
const toOrder = order => (order === "DESC" ? -1 : 1);

module.exports = {
  Query: {
    get_list_guest: (
      _,
      {
        filter = {},
        pagination: { page = 1, perPage = 10 } = {},
        sort: { field = "id", order = "DESC" } = {}
      },
      { db }
    ) =>
      db.guests
        .find(filter)
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({
          [toField(field)]: toOrder(order)
        })
        .toArray()
        .then(data => ({ data })),
    get_one_guest: (_, { id }, { db }) =>
      db.guests.findOne({
        _id: ObjectID(id)
      }),
    get_many_guests: (_, { ids }, { db }) =>
      db.guests
        .find({ _id: { $in: ids.map(id => ObjectID(id)) } })
        .toArray()
        .then(data => ({ data })),
    total_guests: (a, b, { db }) => db.guests.countDocuments({}),
    submitted: (a, b, { db }) =>
      db.guests.countDocuments({ is_submitted: true }),
    attending: (a, b, { db }) =>
      db.guests.countDocuments({ is_attending: true })
  },
  Mutation: {
    // ADMIN ONLY
    create_guest: isAdmin((_, { data }, { db }) =>
      db.guests.insertOne(data).then(v => get(v, "ops[0]"))
    ),
    update_guest: isAdmin((_, { id, data }, { db }) =>
      db.guests
        .updateOne(
          {
            _id: ObjectID(id)
          },
          { $set: data }
        )
        .then(() => Object.assign({}, data, { id }))
    ),
    update_many_guests: isAdmin((_, { ids, data }, { db }) =>
      db.guests
        .update(
          {
            _id: { $in: ids.map(id => ObjectID(id)) }
          },
          { $set: data }
        )
        .then(() => ids)
    ),
    delete_guest: isAdmin((_, { id, data }, { db }) =>
      db.guests
        .deleteOne({
          _id: ObjectID(id)
        })
        .then(() => data)
    ),
    delete_many_guests: isAdmin((_, { ids }, { db }) =>
      db.guests
        .remove({
          _id: { $in: ids.map(id => ObjectID(id)) }
        })
        .then(() => ids)
    ),

    // UNAUTHENTICATED
    set_meal: (_, { id, meal }, { db }) =>
      db.guests
        .updateOne(
          {
            _id: ObjectID(id)
          },
          {
            $set: {
              meal
            }
          }
        )
        .then(() => ({ id, meal })),
    set_is_attending: (_, { id, is_attending }, { db }) =>
      db.guests
        .updateOne(
          {
            _id: ObjectID(id)
          },
          {
            $set: {
              is_attending: Boolean(is_attending)
            }
          }
        )
        .then(() => ({ id, is_attending: Boolean(is_attending) }))
  },
  Guest: {
    id: ({ _id, id }) => (_id || id || "").toString(),
    full_name: ({ first_name, last_name }) =>
      [first_name, last_name].filter(v => v).join(" "),
    is_plus_one: ({ plus_one_id }) => !!plus_one_id,
    plus_one: ({ plus_one_id }, _, { db }) =>
      plus_one_id && db.guests.findOne({ _id: ObjectID(plus_one_id) }),
    children_ids: ({ children_ids }) =>
      (children_ids || []).map(id => (id || "").toString()),
    children: ({ children_ids }, _, { db }) =>
      Promise.all(
        (children_ids || []).map(child_id =>
          db.guests.findOne({ _id: ObjectID(child_id) })
        )
      ),
    no_of_children: ({ children_ids }) => size(children_ids)
  },
  GetListGuestResponse: {
    total: (a, b, { db }) => db.guests.countDocuments({})
  }
};
