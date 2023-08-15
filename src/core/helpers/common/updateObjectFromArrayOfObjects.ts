/**
 * **Attention: High O(n) value way!**
 *
 * @example
 *
 * updateObjectFromArrayOfObjects([{id:1, a:11}, {id:2: a:22}, {id:3, a:33}], {id:2, a:44}, "id")
 * // [{id:1, a:11}, {id:2: a:44}, {id:3, a:33}]
 */
const updateObjectFromArrayOfObjects = <T>(
  arrayOfObjects: T[],
  objectToUpdate: T,
  updateBy: keyof T
): T[] => {
  const index = arrayOfObjects.findIndex(
    (existingPortfolio) =>
      existingPortfolio[updateBy] === objectToUpdate[updateBy]
  )

  // const newState = arrayOfObjects.map(objectFromArray =>
  //   objectFromArray[updateBy] === objectToUpdate[updateBy] ? objectToUpdate : objectFromArray
  // );

  if (index === -1) {
    console.error(
      "You are tried to update undefined object in the list or objects ..."
    )
    return arrayOfObjects
  }

  const newList = [
    ...arrayOfObjects.slice(0, index),
    objectToUpdate,
    ...arrayOfObjects.slice(index + 1),
  ]

  return newList
}

export default updateObjectFromArrayOfObjects
