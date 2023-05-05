import { isArray } from 'lodash';

const sumNormalizedArraysOfNumbers = (customizeBy: string) => (incomingValue: object[] = [], result: object[]) => {  
  return (isArray(incomingValue) ? incomingValue : [ incomingValue ])
    .concat(isArray(result) ? result : [ result ])
    .reduce((prev, cur) => (prev ?? 0) + (cur?.[customizeBy] ?? cur ?? 0), 0);
}

export default sumNormalizedArraysOfNumbers;