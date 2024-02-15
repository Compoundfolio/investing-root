import { NumberSchema, StringSchema, number } from "yup"
import { TransactionType } from "./types"
import { VALIDATION_MESSAGE } from "src/core/consts"

export const isRequired = (
  type: TransactionType | TransactionType[],
  builder: () => NumberSchema | StringSchema = number
) => {
  return ([transactionType], schema) => {
    const allowedTypes = type instanceof Array ? type : [type]
    return allowedTypes.includes(transactionType.value)
      ? builder().required(VALIDATION_MESSAGE.REQUIRED)
      : schema
  }
}
