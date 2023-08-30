type Primitive = string | number

/**
 * `Attention: Array must include only unique values`
 * 
 * @example
 *
 * removePrimitiveFromArrayOfPrimitives([1, 4, 3], 4) // [1, 3]
 */
 const removePrimitiveFromArrayOfPrimitives = (
  array: Primitive[],
  valueToRemove: Primitive,
): Primitive[] => {

  const index = array.findIndex((existingPortfolio) => existingPortfolio === valueToRemove)

  return array.toSpliced(index, 1)
}

export default removePrimitiveFromArrayOfPrimitives
