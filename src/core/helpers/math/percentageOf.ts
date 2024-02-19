const percentageOf = (price: number, percentageValue: number): number => {
  return price * (1 - percentageValue / 100)
}

export default percentageOf
