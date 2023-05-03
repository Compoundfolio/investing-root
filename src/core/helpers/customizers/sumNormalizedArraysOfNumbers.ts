import { isArray } from 'lodash';

const sumNormalizedArraysOfNumbers = (customizeBy: string) => (incomingValue: object[] = [], result: object[]) => {
  console.log(incomingValue);
  console.log(result);
  
  if (isArray(incomingValue)) {
    customizeBy === "price" && console.log(incomingValue, result)
    return incomingValue
      .concat(result)
      .reduce((prev, cur) => prev + cur[customizeBy], 0);
  }
}

export default sumNormalizedArraysOfNumbers;