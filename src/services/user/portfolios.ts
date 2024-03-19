import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { emptyPortfolioTemplate } from "../../components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData/consts"
import { graphql } from "src/graphql"
import {
  createGraphQlUseMutation,
  createGraphQlUseQuery,
} from "src/inversions/queryMaker"
import { Portfolio } from "@core"
import { Service } from "src/services/types"

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
  return createGraphQlUseQuery<typeof PortfoliosQuery>(PortfoliosQuery, {
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
  return createGraphQlUseMutation<typeof CreatePortfolioMutation>(
    CreatePortfolioMutation,
    {
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
    }
  )
}

const DeletePortfolioMutation = graphql(`
  mutation DeletePortfolio($id: UUID!) {
    deletePortfolio(id: $id)
  }
`)
const useDeleteById = (
  deleteSelectedPortfolio: PortfolioManagerContextData["deleteSelectedPortfolio"]
) => {
  return createGraphQlUseMutation<typeof DeletePortfolioMutation>(
    DeletePortfolioMutation,
    {
      queryKey: portfoliosQK,
      onSuccess: deleteSelectedPortfolio,
      // optimisticUpdateType: "delete",
    }
  )
}

export const Portfolios = {
  useGetAll,
  useCreate,
  useDeleteById,
} satisfies Service
