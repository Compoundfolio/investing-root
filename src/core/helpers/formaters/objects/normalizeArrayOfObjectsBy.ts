import { Ticker } from "src/core/types";

const normalizeArrayOfObjectsBy = <T extends object>(
  arrayToNormalize: T[], 
  normalizeBy: keyof T,
) => {
  let res: {[Ticker: Ticker]: T[]} = {}

  for (let index = 0; index < arrayToNormalize.length; index++) {
    const object = arrayToNormalize[index];
    const normalizeKeyValue: Ticker = arrayToNormalize[index][normalizeBy];

    if (res[normalizeKeyValue]) {
      res[normalizeKeyValue] = [
        ...res[normalizeKeyValue],
        object
      ]
    } else {
      res[normalizeKeyValue] = []
    }
  }

  return res
}

export default normalizeArrayOfObjectsBy