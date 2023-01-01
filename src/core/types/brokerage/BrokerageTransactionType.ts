enum BrokerageTransactionType {
  DIVIDEND = "DIVIDEND",
  COUPON = "COUPON",
  COMMISSION = "COMMISSION",
  TAX = "TAX",
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
  TRADE = "TRADE" // TODO: Split it to BUY & SELL?
}

export default BrokerageTransactionType