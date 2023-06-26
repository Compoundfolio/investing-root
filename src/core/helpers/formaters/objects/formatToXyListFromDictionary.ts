const formatToXyListFromDictionary = (dictionary: object) => {
  return Object.entries(dictionary).map(([key, value]) => ({
    x: key,
    y: value as unknown,
  }))
}

export default formatToXyListFromDictionary
