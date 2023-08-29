/**
 * Makes big numbers easy to read
 *
 * @example
 *
 * minimalisticNumberRepresentation(1000) // 1k
 * minimalisticNumberRepresentation(1.490.000, 1) // 1.5M
 */
const minimalisticNumberRepresentation = (num: number, digitsAccuracy: 0 | 1 | 2 | 3 = 0) => {
  if (typeof num !== "number") return
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(item => num >= item.value);

  return item
    ? (num / item.value).toFixed(digitsAccuracy).replace(rx, "$1") + item.symbol
    : "0";
}

export default minimalisticNumberRepresentation
