import guestProvider from "./guest";

export default client => (type, resource, params) => {
  console.log(type, resource, params);
  switch (resource) {
    case "guest":
      return guestProvider(client, type, params);
    default:
      return { data: [], total: 0 };
  }
};
