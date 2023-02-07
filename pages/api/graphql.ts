import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse, IncomingMessage } from "http";
import { Resolver, Query, Arg } from "type-graphql";

import dogs from "src/backend/schema/Market/Prices/dogs.json";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class DogAttribute {
  @Field(() => ID)
  key: string;

  @Field(() => String)
  value: string;
}

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string;

  @Field(() => [DogAttribute])
  attributes: DogAttribute[];

  @Field(() => [String])
  description: string[];

  @Field(() => String)
  image: string;

  @Field(() => Number)
  ageInWeeks: number;

  @Field(() => String)
  sex: string;

  @Field(() => String)
  breed: string;

  @Field(() => String)
  color: string;

  @Field(() => Number)
  fee: number;

  @Field(() => Number)
  weight: number;

  @Field(() => String)
  availableDate: string;
}

@Resolver(Dog)
export class DogsResolver {
  @Query(() => Dog, { nullable: true })
  dog(@Arg("name", () => String) name: string): Dog | undefined {
    const dog = dogs.find((dog) => dog.name === name);
    if (dog === undefined) {
      throw new Error("Dog not found");
    }
    return dog;
  }

  @Query(() => [Dog])
  dogs(): Dog[] {
    return dogs;
  }
}
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
  resolvers: [DogsResolver],
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
  console.log("GraphQL!");
  
}
