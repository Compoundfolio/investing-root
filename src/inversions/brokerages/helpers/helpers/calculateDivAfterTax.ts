import { AssetPosition, Dividends, normalizeArrayOfObjectsBy, Dividend, sumNormalizedArraysOfNumbers, oldDatesFirst, isEmpty } from '@core';
import { format } from 'date-fns';
import { mergeWith } from 'lodash';

 const calculateDivAfterTax = (openPositions: AssetPosition[]): Dividends => {
  let divsByDate: Dividends = {}
  
  openPositions.forEach(openPosition => {      
    if ( openPosition.payedDividendTransactions.length === 0 ) return 
    
    const divsWithFormattedPayDate: Dividend[] = openPosition.payedDividendTransactions
      .map(dividend => ({
        date: format(new Date(dividend.time), "yyy-MM-dd"),
        price: dividend.price,
      }))
      // .sort(oldDatesFirst)

    const normalizedDivsByDate = normalizeArrayOfObjectsBy(divsWithFormattedPayDate, "date")
    !Object.values(normalizedDivsByDate) && console.log(normalizedDivsByDate);
    console.log(normalizedDivsByDate);
    
    mergeWith(divsByDate, normalizedDivsByDate, sumNormalizedArraysOfNumbers("price"));
  })    
console.log(divsByDate);

  return divsByDate
}

export default calculateDivAfterTax