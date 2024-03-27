import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { graphql } from "src/graphql"
import {
  createGraphQlUseMutation,
  createGraphQlUseQuery,
} from "src/inversions/queryMaker"
import { Service } from "src/services/types"
import { ResultOf } from "gql.tada"

const portfoliosQK = "portfoliosQK"

const PortfoliosQuery = graphql(`
  query Portfolios {
    portfolios {
      id
      title
      brokerages
      amountOfUserTransactions
      totalReturnPercentage
      totalReturnValue {
        amount
        currency
      }
      annualIncome {
        amount
        currency
      }
    }
  }
`)
const useGetAll = (
  setPortfolios: PortfolioManagerContextData["setPortfolios"]
) => {
  return createGraphQlUseQuery<typeof PortfoliosQuery>(PortfoliosQuery, {
    queryKey: portfoliosQK,
    onSuccess: ({ portfolios }) => {
      setPortfolios(portfolios)
    },
  })
}

const CreatePortfolioMutation = graphql(`
  mutation CreatePortfolio($data: CreatePortfolio!) {
    createPortfolio(data: $data) {
      id
      title
      brokerages
      amountOfUserTransactions
      totalReturnPercentage
      totalReturnValue {
        amount
        currency
      }
      annualIncome {
        amount
        currency
      }
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
        createNewPortfolioCard(createPortfolio)
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

export type Portfolio = ResultOf<
  typeof CreatePortfolioMutation
>["createPortfolio"]

export const Portfolios = {
  useGetAll,
  useCreate,
  useDeleteById,
} satisfies Service
