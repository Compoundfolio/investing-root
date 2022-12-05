const mergeToDictionary = (headers: string[], rows: string[][]) => {
  if (headers.length !== rows[0].length) {
    throw new Error("I've got a wrong CSV!")
  }

  return rows.map((row: any) => {
    let res = {} as any;

    headers.forEach((header: any, headerIndex: any) => {
      res[header] = row[headerIndex]
    })

    return res
  })
}

export default mergeToDictionary