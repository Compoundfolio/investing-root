import { format } from 'date-fns'; 
import { ShortMonthName } from '@core';

const getMonthShortNameFromDate = (date: string) => {
  // TODO: Add  { locale: ... } at the end when it'll be needed
  return format(new Date(date), 'LLLL') as ShortMonthName 
}

export default getMonthShortNameFromDate