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
  const index = arrayOfObjects.findIndex(
    (existingPortfolio) =>
      existingPortfolio[removeBy] === objectToRemove[removeBy]
  )
  console.log(arrayOfObjects)
  console.log(objectToRemove)
  console.log(arrayOfObjects.toSpliced(index, 1))

  return arrayOfObjects.toSpliced(index, 1)
}

export default removeObjectFromArrayOfObjects
