import BrokerageTransactionType from "./BrokerageTransactionType"

type NonTradeTransactionTypes = Exclude<BrokerageTransactionType, "TRADE">

export default NonTradeTransactionTypes