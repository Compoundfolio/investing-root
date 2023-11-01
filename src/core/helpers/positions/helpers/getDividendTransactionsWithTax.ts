import { ID, NonTradeTransaction } from "src/core/types"
import { normalizeArrayOfObjectsBy, parseNumberToFixed2 } from "@core"

// Return divs, but with dividend tax
const getDividendTransactionsWithTax = (
  divTransactions: NonTradeTransaction<"DIVIDEND">[],
  taxTransactions: NonTradeTransaction<"TAX">[]
) => {
  const dividendTaxes = taxTransactions?.filter(
    (taxTransaction) => !!taxTransaction.parentId
  )
  const divTaxesSumByParentId = normalizeArrayOfObjectsBy(
    dividendTaxes,
    "parentId"
  ) as { [K: ID]: NonTradeTransaction<"TAX">[] }

  // @ts-ignore - TODO: Resolve after MVV stage
  const dividendTransactionsWithTax: NonTradeTransaction<"DIVIDEND">[] =
    divTransactions.map((divTransaction) => {
      return {
        ...divTransaction,
        // TODO: Reimplement divTaxesSumByParentId[divTransaction.id][0]
        price: parseNumberToFixed2(
          // TODO: Refactor
          divTransaction.price -
            Math.abs(
              divTaxesSumByParentId?.[divTransaction?.id]?.[0]?.price ??
                Number(
                  // @ts-ignore - TODO: Resolve after MVV stage
                  divTransaction.comment.split("tax ").pop().split(" USD")[0]
                )
            )
        ),
      }
    })

  return dividendTransactionsWithTax
}

export default getDividendTransactionsWithTax
