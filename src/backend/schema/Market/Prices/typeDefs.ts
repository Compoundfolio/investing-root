export const typeDefs = `
  type Query {
    getPriceByTicker: [User!]!
  }
  type User {
    name: String
  }
`