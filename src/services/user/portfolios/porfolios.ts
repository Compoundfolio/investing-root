import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { ResultOf, graphql } from "src/graphql"
import { Api, optimistic } from "src/inversions"
import { createUseMutation, createUseQuery } from "src/inversions/queryMaker"

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

type PortfoliosQueryResult = ResultOf<typeof PortfoliosQuery>

const portfoliosQK = "useGetUserPortfoliosQK"

export const useGetUserPortfolios = (
  setPortfolios: PortfolioManagerContextData["setPortfolios"]
) => {
  return createUseQuery({
    queryKey: [portfoliosQK],
    queryFn: async () => {
      const data = await Api.POST<PortfoliosQueryResult>({
        query: PortfoliosQuery,
      })
      // TODO: Call, only if there is no req error
      setPortfolios(data.portfolios)
      return data
    },
  })
}

export const useCreateUserPortfolio = (
  createNewPortfolioCard: PortfolioManagerContextData["createNewPortfolioCard"]
) => {
  return createUseMutation({
    // TODO: Type
    // TODO: data
    mutationFn: async (newPortfolioDetails: any) => {
      const res = await Api.POST({
        query: CreatePortfolioMutation,
        variables: newPortfolioDetails,
      })
      // TODO: Call, only if there is no req error
      createNewPortfolioCard()
      return res
    },
    // ...optimistic.create({ keys: [portfoliosQK] }),
  })
}

// export const useDeleteUserPortfolio = createUseMutation({
//   mutationFn: () => Api.POST({ query: DeletePortfolioMutation }),
// })
