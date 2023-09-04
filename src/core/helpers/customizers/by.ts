const by = (key: string) => (value: object ) => {
  return value[key]
}

export default by