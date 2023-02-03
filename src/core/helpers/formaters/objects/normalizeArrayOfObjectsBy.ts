const normalizeArrayOfObjectsBy = <T extends { [K: string]: any }>(
  arrayToNormalize: T[], 
  normalizeKey: keyof T,
  normalizeValue?: keyof T,
) => {
  type NormalizeKeyType = string
  type NormalizeValueType = T[] | T[keyof T]
  let res: {[ K: NormalizeKeyType]: NormalizeValueType } = {}

  for (let index = 0; index < arrayToNormalize.length; index++) {
    const object = arrayToNormalize[index];
    const normalizeKeyName = object[normalizeKey] as NormalizeKeyType;

    if (normalizeValue) {
      res[normalizeKeyName] = object[normalizeValue] as T[keyof T]
      return res
    }

    const valueByKeyName = res[normalizeKeyName] as T[]
    if (valueByKeyName?.length) {
      res[normalizeKeyName] = [
        ...valueByKeyName,
        object
      ]
    } else {
      res[normalizeKeyName] = [object]
    }
  }

  return res
}

export default normalizeArrayOfObjectsBy