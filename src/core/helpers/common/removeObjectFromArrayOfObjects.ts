/**
 * @example
 *
 * removeObjectFromArrayOfObjects([{id:1}, {id:2}, {id:3}], {id:2}, "id") // [{id:1}, {id:3}]
 */
const removeObjectFromArrayOfObjects = <T>(
  arrayOfObjects: T[],
  objectToRemove: T,
  removeBy: keyof T
): T[] => {
  const index = arrayOfObjects.findIndex(existingPortfolio => existingPortfolio[removeBy] === objectToRemove[removeBy])
  return arrayOfObjects.toSpliced(index)
}

export default removeObjectFromArrayOfObjects