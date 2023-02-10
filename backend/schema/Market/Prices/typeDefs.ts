import { queries } from "./queries"

const typeDefs = /* GraphQL */ `
  type DogAttribute {
    key: ID!
    value: String
  }
  
  type Dog {
    name: ID!
    attributes: [DogAttribute]
    description: [String]
    image: String
    ageInWeeks: Int
    sex: String
    breed: String
    color: String
    fee: Int
    weight: Int
    availableDate: String
  }

  type Query {
    dog(name: String!): Dog
    dogs: [Dog]
  }
`

export default typeDefs