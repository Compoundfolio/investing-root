import { IsoDate } from "src/core/types";

type IsoDateDaysDictionary<TValue = void> = {
  [K: IsoDate]: TValue
}
const getIsoDatesDaysBetweenTwoDates = <TValue = void>(
  startDate: Date, 
  endDate: Date, 
  valueToFillWith: TValue = null
) => {
  let daysDictionary: IsoDateDaysDictionary<TValue> = {}
  
  for (let arr = [], dt = startDate; dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    daysDictionary[dt.toISOString().slice(0, 10) as IsoDate] = valueToFillWith
  }

  return daysDictionary;
}

export default getIsoDatesDaysBetweenTwoDates