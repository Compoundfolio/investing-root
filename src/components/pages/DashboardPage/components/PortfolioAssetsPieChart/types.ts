export type DataItem = {
  id: string
  label: string
  value: number
}

export type Data = DataItem[]

export type PieItem = Pick<DataItem, "id" | "label" | "value"> & {
  percentage: number
}
