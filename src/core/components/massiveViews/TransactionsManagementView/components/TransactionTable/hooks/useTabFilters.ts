import { Tab } from "src/core/components/tabulation/TabGroup/types"

interface IUseTabFilters {
  allTransactionsAmount: number
  uploadedTransactionsAmount: number
  handlyAddedTransactionsAmount: number
  editedTransactionsAmount: number
  deletedTransactionsAmount: number
  filterTransactions: () => (transactionFilter: TransactionFilter) => void
}

const useTabFilters = ({
  allTransactionsAmount,
  uploadedTransactionsAmount,
  handlyAddedTransactionsAmount,
  editedTransactionsAmount,
  deletedTransactionsAmount,
  filterTransactions,
}: IUseTabFilters): Tab[] => {
  return [
    { title: "All", entityAmount: allTransactionsAmount, onClick: filterTransactions("ALL") },
    { title: "Uploaded", entityAmount: uploadedTransactionsAmount, onClick: filterTransactions("UPLOADED") },
    { title: "Handly added", entityAmount: handlyAddedTransactionsAmount, onClick: filterTransactions("HANDLY_ADDED") },
    { title: "Edited", entityAmount: editedTransactionsAmount, onClick: filterTransactions("HANDLY_EDITED") },
    { title: "Deleted", entityAmount: deletedTransactionsAmount, onClick: filterTransactions("DELETED") },
  ]
}

export default useTabFilters