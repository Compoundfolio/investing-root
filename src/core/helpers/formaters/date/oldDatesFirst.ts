type ObjWithDateXKey = {
  [K: string | number]: unknown
  x: string
}

const oldDatesFirst = (obj1: ObjWithDateXKey, obj2: ObjWithDateXKey) => {
  return obj1.x.localeCompare(obj2.x)
}

export default oldDatesFirst