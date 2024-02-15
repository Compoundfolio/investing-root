import DividendSpecificFields from "./DividendSpecificFields"
import DividendTaxSpecificFields from "./DividendTaxSpecificFields"
import FeeSpecificFields from "./FeeSpecificFields"
import FundingWithdrawalSpecificFields from "./FundingWithdrawalSpecificFields"
import TradeSpecificFields from "./TradeSpecificFields"
import { TransactionType } from "../../../types"
import { ITypeBasedFIeldsProps } from "../types"

export const FieldGroupModule: Record<
  TransactionType,
  React.FC<ITypeBasedFIeldsProps>
> = {
  TRADE: TradeSpecificFields,
  DIVIDEND: DividendSpecificFields,
  DIVIDEND_TAX: DividendTaxSpecificFields,
  FEE: FeeSpecificFields,
  FUNDING_WITHDRAWAL: FundingWithdrawalSpecificFields,
}
