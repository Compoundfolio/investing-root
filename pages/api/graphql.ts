import { pricesResolvers, typeDefs } from 'backend/schema/Market'
// import { createYoga, createSchema } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false
  }
}
// const schema = createSchema({
//   typeDefs: typeDefs,
//   resolvers: pricesResolvers
// })
 
// export default createYoga<{
//   req: NextApiRequest
//   res: NextApiResponse
// }>({
//   // @ts-ignore
//   schema,
//   // Needed to be defined explicitly because our endpoint 
//   // lives at a different path other than `/graphql`
//   graphqlEndpoint: '/api/graphql'
// })


