import { isArray } from 'lodash';
import { parseNumber, parseNumberToFixed2 } from '../formaters';

const sumNormalizedArraysOfNumbers = (customizeBy: string) => (incomingValue: object[] = [], result: object[]) => {  
  return (isArray(incomingValue) ? incomingValue : [ incomingValue ])
    .concat(isArray(result) ? result : [ result ])
    .reduce((prev, cur) => parseNumberToFixed2((prev ?? 0) + (cur?.[customizeBy] ?? cur ?? 0)), 0);
}

export default sumNormalizedArraysOfNumbers;