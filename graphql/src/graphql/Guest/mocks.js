const casual = require("casual");

const Guest = id => ({
  id: id || casual.uuid,
  first_name: casual.first_name,
  last_name: casual.last_name,
  email: casual.email,
  address: {
    street_address: `${casual.building_number} ${casual.street}`,
    city: casual.city,
    state: casual.state_abbr,
    zip: casual.zip
  }
});

module.exports = {
  //   Guest: (_, { id }) => Guest(id),
  GetListGuestResponse: (_, { pagination: { perPage } = {} }) => ({
    data: () => Array.from({ length: perPage }, () => Guest()),
    total: perPage
  }),
  Query: () => ({})
};
