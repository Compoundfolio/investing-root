import { ArrayElement } from "@core"
import { ResultOf } from "gql.tada"
import { TransactionsQuery } from "src/services/user"

// TODO: Rid of v2, when I'll migrate front-end to gql types usage everywhere it's possible
type PortfolioTransactionV2 = ArrayElement<
  ResultOf<typeof TransactionsQuery>["userTransactions"]
>

export default PortfolioTransactionV2
