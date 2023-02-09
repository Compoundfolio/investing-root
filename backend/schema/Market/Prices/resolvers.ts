import dogs from './dogs.json';

const pricesResolvers = {
  Query: {
    dog(name: string) {
      const dog = dogs.find((dog) => dog.name === name);
      if (dog === undefined) {
        throw new Error("Dog not found");
      }
      return dog;
    },
    dogs() {
      return dogs
    },
  },
}

export default pricesResolvers

// }
// @Resolver(Dog)
// export class DogsResolver {
//   @Query(() => Dog, { nullable: true })
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
// }