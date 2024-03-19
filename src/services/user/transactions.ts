import { createGraphQlUseMutation, createGraphQlUseQuery } from "src/inversions"
import { Service } from "../types"
import { toast } from "sonner"
import { graphql } from "src/graphql"
import { ID } from "@core"

export const transactionsUploadQk = "transactionsUploadQk"

const TransactionsQuery = graphql(`
  query Transactions {
    userTransactions(portfolioId: UUID) {
      id
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
export const useGetAllByPortfolioId = (selectedPortfolioId: ID) =>
  // setTransactions: PortfolioTransactionsContextData["setTransactions"]
  {
    return createGraphQlUseQuery<typeof TransactionsQuery>(TransactionsQuery, {
      queryKey: transactionsUploadQk,
      // onSuccess: ({ userTransactions }) => {
      //   setTransactions(userTransactions)
      // },
    })
  }

const CreateFiscalTransactionMutation = graphql(`
  mutation CreateFiscalTransaction($createRequest: CreateFiscalTransaction!) {
    createFiscalTransaction(createRequest: $createRequest)
  }
`)
export const useCreateFiscalTransaction = () =>
  // createNewFiscalTransaction: PortfolioTransactionsContextData["createNewFiscalTransaction"]
  {
    return createGraphQlUseMutation<typeof CreateFiscalTransactionMutation>(
      CreateFiscalTransactionMutation,
      {
        queryKey: transactionsUploadQk,
        // onSuccess: ({ createFiscalTransaction: addedTransactionId }) => {
        //   // TODO: Request API to implement more fields, remove
        //   createNewFiscalTransaction(addedTransactionId)
        // },
        // optimisticUpdateType: "create",
      }
    )
  }

const CreateTradeOperationMutation = graphql(`
  mutation CreateTradeOperation($createRequest: CreateTradeOperation!) {
    createTradeOperationg(createRequest: $createRequest)
  }
`)

export const useCreateTradeOperationTransaction = () =>
  // createNewTradeOperationTransaction: PortfolioTransactionsContextData["createNewTradeOperationTransaction"]
  {
    return createGraphQlUseMutation<typeof CreateTradeOperationMutation>(
      CreateTradeOperationMutation,
      {
        queryKey: transactionsUploadQk,
        // onSuccess: ({
        //   createTradeOperationg: addedTransactionTradeOperationId,
        // }) => {
        //   // TODO: Request API to implement more fields, remove
        //   createNewTradeOperationTransaction(addedTransactionTradeOperationId)
        // },
        // optimisticUpdateType: "create",
      }
    )
  }

const DeleteFiscalTransactionMutation = graphql(`
  mutation DeleteFiscalTransaction($id: UUID!) {
    deleteFiscalTransaction(id: $id)
  }
`)
export const useDeleteFiscalTransactionById = () =>
  // deleteFiscalTransaction: PortfolioTransactionsContextData["deleteFiscalTransaction"]
  {
    return createGraphQlUseMutation<typeof DeleteFiscalTransactionMutation>(
      DeleteFiscalTransactionMutation,
      {
        queryKey: transactionsUploadQk,
        // onSuccess: deleteFiscalTransaction,
        // optimisticUpdateType: "delete",
      }
    )
  }

const DeleteTradeOperationMutation = graphql(`
  mutation DeleteTradeOperation($id: UUID!) {
    deleteTradeOperationg(id: $id)
  }
`)
export const useDeleteTradeOperationTransactionById = () =>
  // deleteTradeOperationTransaction: PortfolioTransactionsContextData["deleteTradeOperationTransaction"]
  {
    return createGraphQlUseMutation<typeof DeleteTradeOperationMutation>(
      DeleteTradeOperationMutation,
      {
        queryKey: transactionsUploadQk,
        // onSuccess: deleteTradeOperationTransaction,
        // optimisticUpdateType: "delete",
      }
    )
  }

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
export const useUpload = () => {
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
  useGetAllBy: useGetAllByPortfolioId,
  useUpload,
  fiscal: {
    useCreate: useCreateFiscalTransaction,
    useDeleteById: useDeleteFiscalTransactionById,
  },
  trade: {
    useCreate: useCreateTradeOperationTransaction,
    useDeleteById: useDeleteTradeOperationTransactionById,
  },
} satisfies Service
