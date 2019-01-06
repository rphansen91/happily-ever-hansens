const { default: gql } = require("graphql-tag");

module.exports = gql`
  enum Meal {
    Steak
    Salmon
    Vegetarian
    Kids
  }

  type Address {
    street_address: String
    city: String
    state: String
    zip: String
  }

  input AddressInput {
    street_address: String
    city: String
    state: String
    zip: String
  }

  type Guest {
    id: String
    full_name: String
    first_name: String
    last_name: String
    email: String
    phone: String
    address: Address
    is_attending: Boolean
    is_submitted: Boolean
    meal: Meal
    plus_one_id: String
    plus_one: Guest
    is_plus_one: Boolean
    children_ids: [String]
    children: [Guest]
    no_of_children: Int
  }

  type GetListGuestResponse {
    data: [Guest]
    total: Int
  }

  input GuestInput {
    first_name: String
    last_name: String
    email: String
    phone: String
    meal: Meal
    plus_one_id: String
    children_ids: [String]
    address: AddressInput
    is_attending: Boolean = false
    is_submitted: Boolean = false
  }

  input GuestUpdate {
    first_name: String
    last_name: String
    email: String
    phone: String
    address: AddressInput
    meal: Meal
    plus_one_id: String
    children_ids: [String]
    is_attending: Boolean
    is_submitted: Boolean
  }

  type SetMealResponse {
    id: String
    meal: Meal
  }

  type SetIsAttendingResponse {
    id: String
    is_attending: Boolean
  }

  extend type Query {
    get_list_guest(
      filter: JSON
      pagination: Pagination
      sort: Sort
    ): GetListGuestResponse
    get_one_guest(id: String): Guest
    get_many_guests(ids: [String]): GetListGuestResponse
    total_guests: Int
    submitted: Int
    attending: Int
  }

  extend type Mutation {
    create_guest(data: GuestInput): Guest
    update_guest(id: String!, data: GuestUpdate): Guest
    update_many_guests(ids: [String], data: GuestUpdate): [String]
    delete_guest(id: String!, data: GuestUpdate): Guest
    delete_many_guests(ids: [String]): [String]
    set_meal(id: String!, meal: Meal): SetMealResponse
    set_is_attending(id: String!, is_attending: Boolean): SetIsAttendingResponse
  }
`;
