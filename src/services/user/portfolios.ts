import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { graphql } from "src/graphql"
import {
  createGraphQlUseMutation,
  createGraphQlUseQuery,
} from "src/inversions/queryMaker"
import { emptyPortfolioTemplate } from "../../components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData/consts"
import { Portfolio } from "@core"
import { Service } from "src/services/types"
import { toast } from "sonner"

const portfoliosQK = "portfoliosQK"

const PortfoliosQuery = graphql(`
  query Portfolios {
    portfolios {
      id
      label
    }
  }
`)
const useGetAll = (
  setPortfolios: PortfolioManagerContextData["setPortfolios"]
) => {
  return createGraphQlUseQuery(PortfoliosQuery, {
    queryKey: portfoliosQK,
    onSuccess: ({ portfolios }) => {
      // TODO: Request API to implement more fields, remove
      const updatedPortfolios: Portfolio[] = portfolios.length
        ? portfolios.map(({ id, label }) => ({
            ...emptyPortfolioTemplate,
            id,
            title: label,
          }))
        : []

      setPortfolios(updatedPortfolios)
    },
  })
}

const CreatePortfolioMutation = graphql(`
  mutation CreatePortfolio($data: CreatePortfolio!) {
    createPortfolio(data: $data) {
      id
      label
    }
  }
`)
const useCreate = (
  createNewPortfolioCard: PortfolioManagerContextData["createNewPortfolioCard"]
) => {
  return createGraphQlUseMutation(CreatePortfolioMutation, {
    queryKey: portfoliosQK,
    onSuccess: ({ createPortfolio }) => {
      // TODO: Request API to implement more fields, remove
      createNewPortfolioCard({
        ...emptyPortfolioTemplate,
        id: createPortfolio.id,
        title: createPortfolio.label,
      })
    },
    // optimisticUpdateType: "create",
  })
}

const DeletePortfolioMutation = graphql(`
  mutation DeletePortfolio($id: UUID!) {
    deletePortfolio(id: $id)
  }
`)
const useDeleteById = (
  deleteSelectedPortfolio: PortfolioManagerContextData["deleteSelectedPortfolio"]
) => {
  return createGraphQlUseMutation(DeletePortfolioMutation, {
    queryKey: portfoliosQK,
    onSuccess: deleteSelectedPortfolio,
    // optimisticUpdateType: "delete",
  })
}

// ;('operations={"query": "mutation UploadFile($file: Upload!) { uploadReport(brokerage: EXANTE, portfolioId: "d5bd66bb-d8fb-4da2-849e-5af7593a35ba", upload: $file) { id, fiscalTransactions, tradeOperations} }", "variables": { "file": null } }')

const UploadBrokerageReport = graphql(`
  mutation UploadBrokerageReport($upload: Upload!) {
    uploadFile(upload: $upload)
  }
`)
const useUpload = () => {
  return createGraphQlUseMutation(UploadBrokerageReport, {
    // TODO: queryKey: "transactions",
    queryKey: "HARD-CODE",
    onSuccess: () => {
      toast.success("Report uploaded. Transactions added to selected portfolio")
    },
  })
}

export const Portfolios = {
  useGetAll,
  useCreate,
  useDeleteById,
  useUpload,
} satisfies Service
