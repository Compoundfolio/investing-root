import { by, removePrimitiveFromArrayOfPrimitives } from "@core/helpers"
import { useState, useMemo, useCallback } from "react"
import { PortfolioTransaction } from "src/core/types"

interface IUseCheckTableRows {
  transactionList: PortfolioTransaction[]
}

const useCheckTableRows = ({
  transactionList,
}: IUseCheckTableRows) => {
  const [checkedTransactionIds, setCheckedTransactionIds] = useState<PortfolioTransaction['id'][]>([])

  const isAllSelected = useMemo(() => {
    return checkedTransactionIds.length > 0 && checkedTransactionIds.length === transactionList.length
  }, [checkedTransactionIds.length, transactionList.length])

  const transactionIdList = useMemo(() => transactionList.map(by("id")), [transactionList.length])

  const checkAll = () => {
    setCheckedTransactionIds(isAllSelected
      ? []
      : transactionIdList
    )
  }

  const checkOneTransaction = useCallback((transactionId: PortfolioTransaction['id']) => () => {
    setCheckedTransactionIds(prev => checkedTransactionIds.includes(transactionId)
      ? [...prev, transactionId]
      : removePrimitiveFromArrayOfPrimitives(prev, transactionId)
    )
  }, [checkedTransactionIds])

  return {
    isAllSelected,
    checkedTransactionIds,
    checkAll,
    checkOneTransaction
  }
}

export default useCheckTableRows