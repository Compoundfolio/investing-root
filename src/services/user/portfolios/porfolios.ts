import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { graphql } from "src/graphql"
import { Api } from "src/inversions"
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

type t = (typeof PortfoliosQuery)["__ensureTypesOfVariablesAndResultMatching"]

export const useGetUserPortfolios = (
  portfoliosContext: PortfolioManagerContextData
) => {
  return createUseQuery(
    "queryKey",
    () => Api.POST<any>({ query: PortfoliosQuery }),
    {
      onSuccess: (data) => {
        setLocalData(data)
      },
    }
  )
}

// export const useCreateUserPortfolio = createUseMutation({
//   mutationFn: () => Api.POST({ query: CreatePortfolioMutation }),
// })

// export const useDeleteUserPortfolio = createUseMutation({
//   mutationFn: () => Api.POST({ query: DeletePortfolioMutation }),
// })
