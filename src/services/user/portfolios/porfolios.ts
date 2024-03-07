import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { graphql } from "src/graphql"
import { createGraphQlUseMutation } from "src/inversions/queryMaker"
import { emptyPortfolioTemplate } from "../../../components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData/consts"
import { Portfolio } from "@core"

const PortfoliosQuery = graphql(`
  query Portfolios {
    portfolios {
      id
      label
    }
  }
`)

const CreatePortfolioMutation = graphql(`
  mutation CreatePortfolio($data: CreatePortfolio!) {
    createPortfolio(data: $data) {
      id
      label
    }
  }
`)

const DeletePortfolioMutation = graphql(`
  mutation DeletePortfolio($id: UUID!) {
    deletePortfolio(id: $id)
  }
`)

const portfoliosQK = "useGetUserPortfoliosQK"

export const useGetUserPortfolios = (
  setPortfolios: PortfolioManagerContextData["setPortfolios"]
) => {
  return createGraphQlUseMutation(PortfoliosQuery, {
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

export const useCreateUserPortfolio = (
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

export const useDeleteUserPortfolio = (
  deleteSelectedPortfolio: PortfolioManagerContextData["deleteSelectedPortfolio"]
) => {
  return createGraphQlUseMutation(DeletePortfolioMutation, {
    queryKey: portfoliosQK,
    onSuccess: deleteSelectedPortfolio,
    // optimisticUpdateType: "delete",
  })
}
