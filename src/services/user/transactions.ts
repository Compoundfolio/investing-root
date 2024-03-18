import { createGraphQlUseMutation } from "src/inversions"
import { Service } from "../types"
import { toast } from "sonner"
import { graphql } from "src/graphql"

export const transactionsUploadQk = "transactionsUploadQk"

const TransactionsQuery = graphql(`
  query Transactions {
    userTransactions(portfolioId: UUID) {
      userTransactionType
      brokerage
      symbol
      quantity
      tradeSide
      tradeOperationId
      fiscalTransactionId
      unrecognizedType
      dateTime
      summ {
        amount
        currency
      }
    }
  }
`)

const CreateFiscalTransactionMutation = graphql(`
  mutation CreateFiscalTransaction($createRequest: CreateFiscalTransaction!) {
    createFiscalTransaction(createRequest: $createRequest)
  }
`)

const CreateTradeOperationMutation = graphql(`
  mutation CreateTradeOperation($createRequest: CreateTradeOperation!) {
    createTradeOperationg(createRequest: $createRequest)
  }
`)

const DeleteDeleteFiscalTransactionMutation = graphql(`
  mutation DeleteTradeOperation($id: UUID!) {
    deleteFiscalTransaction(id: $id)
  }
`)

const DeleteTradeOperationMutation = graphql(`
  mutation DeleteTradeOperation($id: UUID!) {
    deleteTradeOperationg(id: $id)
  }
`)

// ;('operations={"query": "mutation UploadFile($file: Upload!) { uploadReport(brokerage: EXANTE, portfolioId: "d5bd66bb-d8fb-4da2-849e-5af7593a35ba", upload: $file) { id, fiscalTransactions, tradeOperations} }", "variables": { "file": null } }')
const UploadBrokerageReport = graphql(`
  mutation UploadBrokerageReport(
    $portfolioId: UUID!
    $upload: Upload!
    $brokerage: BrokerType!
  ) {
    uploadReport(
      portfolioId: $portfolioId
      upload: $upload
      brokerage: $brokerage
    ) {
      fiscalTransactions
      tradeOperations
    }
  }
`)
const useUpload = () => {
  return createGraphQlUseMutation<typeof UploadBrokerageReport>(
    UploadBrokerageReport,
    {
      queryKey: transactionsUploadQk,
      onSuccess: () => {
        toast.success(
          "Report uploaded. Transactions added to selected portfolio"
        )
      },
    }
  )
}

export const Transactions = {
  useGetAll,
  useCreate,
  useDeleteById,
  useUpload,
} satisfies Service
