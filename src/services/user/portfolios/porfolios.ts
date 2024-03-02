import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { graphql } from "src/graphql"
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

// type t = (typeof PortfoliosQuery)["__ensureTypesOfVariablesAndResultMatching"]

const portfoliosQK = "useGetUserPortfoliosQK"

export const useGetUserPortfolios = (
  setPortfolios: PortfolioManagerContextData["setPortfolios"]
) => {
  return createUseQuery({
    queryKey: [portfoliosQK],
    queryFn: async () => {
      const data = await Api.POST<any>({ query: PortfoliosQuery })
      setPortfolios(data.portfolios)
      return data
    },
  })
}

export const useCreateUserPortfolio = () => {
  return createUseMutation({
    mutationFn: () => Api.POST({ query: CreatePortfolioMutation }),
    ...optimistic.create({ keys: [portfoliosQK] }),
  })
}

// export const useDeleteUserPortfolio = createUseMutation({
//   mutationFn: () => Api.POST({ query: DeletePortfolioMutation }),
// })
