import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";

// import { MarketApiDataResolver } from "../../src/schema/dogs.resolver";

/** TODO: GraphQL stuff structure like bellow:
  /src
    /schema
      /Product
          model.js
          query.js
          mutation.js
          type.js
          resolvers.js
          index.js
      /Order
          query.js
          mutation.js
          model.js
          types.js
          resolvers.js
          index.js
      index.js
 */

const schema = await buildSchema({
  resolvers: [MarketApiDataResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(
  req: MicroRequest, 
  res: ServerResponse<IncomingMessage>
) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}