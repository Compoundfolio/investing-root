type BrokerageTransactionType =
  | "DIVIDEND"
  | "COUPON"
  | "COMMISSION"
  | "TAX"
  | "DEPOSIT"
  | "WITHDRAWAL"
  | "TRADE" // TODO: Split it to BUY & SELL?

export default BrokerageTransactionType
