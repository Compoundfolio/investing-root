import { format } from 'date-fns'; 
import { ShortMonthName } from '@core';

const getMonthShortNameFromDate = (date: string | Date) => {
  // TODO: Add  { locale: ... } at the end when it'll be needed
  const value = date instanceof Date ? date : new Date(date)

  return format(value, 'LLL') as ShortMonthName 
}

export default getMonthShortNameFromDate