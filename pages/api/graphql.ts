import { pricesResolvers, typeDefs } from 'backend/schema/Market'
import { createYoga, createSchema } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}
// TODO: Look https://blog.logrocket.com/build-graphql-app-node-js-typescript-graphql-request/
const schema = createSchema({
  // typeDefs: typeDefs,
  typeDefs: typeDefs,
  resolvers: pricesResolvers
  // resolvers: {
  //   Query: {
  //     greetings: () => 'This is the `greetings` field of the root `Query` type'
  //   }
  // }
})
 
export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  // @ts-ignore
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql'
})
// // import { MarketApiDataResolver } from "../../src/schema/dogs.resolver"

// /** TODO: GraphQL stuff structure like bellow:
//   /src
//     /schema
//       /Product
//           model.js
//           query.js
//           mutation.js
//           type.js
//           resolvers.js
//           index.js
//       /Order
//           query.js
//           mutation.js
//           model.js
//           types.js
//           resolvers.js
//           index.js
//       index.js
//  */

// const schema = await buildSchema({
//   resolvers: pricesResolvers,
// })

// const server = new ApolloServer({
//   schema,
// })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// const startServer = server.start()

// export default async function handler(
//   req: MicroRequest, 
//   res: ServerResponse<IncomingMessage>
// ) {
//   await startServer
//   await server.createHandler({ path: "/api/graphql" })(req, res)
//   console.log("GraphQL!")
  
// }

// import { graphql, buildSchema } from 'graphql'
import gql from 'graphql-tag';

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

// var rootValue = { hello: () => 'Hello world!' }

// var source = '{ hello }'

// graphql({ schema, source, rootValue }).then((response) => {
//   console.log(response)
// })


