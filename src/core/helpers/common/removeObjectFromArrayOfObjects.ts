/**
 * @example
 *
 * removeObjectFromArrayOfObjects([{id:1}, {id:2}, {id:3}], {id:2}, "id") // [{id:1}, {id:3}]
 */
const removeObjectFromArrayOfObjects = <T>(
  arrayOfObjects: T[],
  objectToRemove: any,
  removeBy: keyof T
): T[] => {
  // TODO: Make local env check
  if (objectToRemove[removeBy] === undefined) throw new Error("Wrong `removeObjectFromArrayOfObjects` function usage ")

  const index = arrayOfObjects.findIndex((existingPortfolio) => existingPortfolio[removeBy] === objectToRemove[removeBy])

  return arrayOfObjects.toSpliced(index, 1)
}

export default removeObjectFromArrayOfObjects
