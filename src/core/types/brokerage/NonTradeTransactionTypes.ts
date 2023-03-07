import { ExanteCsvNonTradeTransaction } from "src/inversions/brokerages/Exante/__types__"

type NonTradeTransactionTypes = Exclude<ExanteCsvNonTradeTransaction["Operation Type"], "TRADE">

export default NonTradeTransactionTypes