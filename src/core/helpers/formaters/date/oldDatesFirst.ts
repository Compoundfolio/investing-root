type ObjWithDateXKey = {
  [K: string | number]: unknown
  x: string
}

type ObjWithDateDateKey = {
  [K: string | number]: unknown
  date: string
}

function oldDatesFirst(
  obj1: ObjWithDateXKey | ObjWithDateDateKey, 
  obj2: ObjWithDateXKey | ObjWithDateDateKey,
) {
  const date1 = (obj1?.x ?? obj1?.date) as string
  const date2 = (obj2?.x ?? obj2?.date) as string
  return date1.localeCompare(date2)
}

export default oldDatesFirst