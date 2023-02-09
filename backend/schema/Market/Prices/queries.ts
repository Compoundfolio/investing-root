export const queries = /* GraphQL */ `
  type Query {
    dog(name: String!): Dog
    dogs(): [Dog]
  }
`

// @Query(() => Dog, { nullable: true })
//   dog(@Arg("name", () => String) name: string): Dog | undefined {
//     const dog = dogs.find((dog) => dog.name === name);
//     if (dog === undefined) {
//       throw new Error("Dog not found");
//     }
//     return dog;
//   }

//   @Query(() => [Dog])
//   dogs(): Dog[] {
//     return dogs;
//   }

