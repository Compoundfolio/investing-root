import { PortfolioManagerContextData } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"
import { ResultOf, VariablesOf, graphql } from "src/graphql"
import { Api, optimistic } from "src/inversions"
import { createUseMutation, createUseQuery } from "src/inversions/queryMaker"
import { emptyPortfolioTemplate } from "../../../components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData/consts"
import { Portfolio } from "@core"
import { TadaDocumentNode } from "gql.tada"
import { DocumentNode } from "graphql"

// type QueryKey = "" // TODOD
// abstract class GqlQueryServiceItem {
//   private Query: ReturnType<typeof graphql>
//   private requestResult: VariablesOf<typeof this.Query>
//   portfoliosQK: QueryKey
// }

// class CreatePortfolio implements GqlQueryServiceItem {
//   private Query = graphql(`
//     query Portfolios {
//       portfolios {
//         id
//         label
//       }
//     }
//   `)

//   private requestResult:

//   portfoliosQK: ""
// }
// new CreatePortfolio()

// {
// }

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

// type CreatePortfolioMutationReqData = VariablesOf<
//   typeof CreatePortfolioMutation
// >
type DeletePortfolioMutationReqData = VariablesOf<
  typeof DeletePortfolioMutation
>

type PortfoliosQueryResult = ResultOf<typeof PortfoliosQuery>
type CreatePortfolioMutationResult = ResultOf<typeof CreatePortfolioMutation>
type DeletePortfolioMutationResult = ResultOf<typeof DeletePortfolioMutation>

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
      // TODO: Request API to implement more fields, remove
      const portfolios: Portfolio[] = data.portfolios.length
        ? data.portfolios.map(({ id, label }) => ({
            ...emptyPortfolioTemplate,
            id,
            title: label,
          }))
        : []

      setPortfolios(portfolios)

      return data
    },
  })
}

type Options = {
  queryKey: string
  optimisticUpdateType?: keyof typeof optimistic
}
/** Creates a `GraphQL`-friendly `react-query` **mutation** */
export const createGraphQlUseMutation = (
  query: DocumentNode,
  { queryKey, optimisticUpdateType }: Options
) => {
  return createUseMutation({
    mutationFn: async (variables: VariablesOf<typeof query>) => {
      const data = await Api.POST<ResultOf<typeof query>>({
        query,
        variables,
      })
      return data
    },
    // TODO: Better code
    ...(optimisticUpdateType
      ? optimistic[optimisticUpdateType]({ keys: [queryKey] })
      : {
          onSuccess: queryClient.invalidateQueries({ queryKey: [queryKey] }),
        }),
  })
}

createGraphQlUseMutation(CreatePortfolioMutation, {
  queryKey: portfoliosQK,
  // optimisticUpdateType: "create",
})

export const useCreateUserPortfolio = (
  createNewPortfolioCard: PortfolioManagerContextData["createNewPortfolioCard"]
) => {
  return createUseMutation({
    mutationFn: async (newPortfolioDetails: CreatePortfolioMutationReqData) => {
      const { createPortfolio } = await Api.POST<CreatePortfolioMutationResult>(
        {
          query: CreatePortfolioMutation,
          variables: newPortfolioDetails,
        }
      )
      // TODO: Request API to implement more fields, remove
      const newPortfolio: Portfolio = {
        ...emptyPortfolioTemplate,
        id: createPortfolio.id,
        title: createPortfolio.label,
      }
      // TODO: Call, only if there is no req error
      createNewPortfolioCard(newPortfolio)
      return createPortfolio
    },
    // ...optimistic.create({ keys: [portfoliosQK] }),
  })
}

export const useDeleteUserPortfolio = (
  deleteSelectedPortfolio: PortfolioManagerContextData["deleteSelectedPortfolio"]
) => {
  return createUseMutation({
    mutationFn: async (portfolioDetails: DeletePortfolioMutationReqData) => {
      const { deletePortfolio: deletePortfolioId } =
        await Api.POST<DeletePortfolioMutationResult>({
          query: DeletePortfolioMutation,
          variables: portfolioDetails,
        })
      // TODO: Call, only if there is no req error
      deleteSelectedPortfolio()
      return deletePortfolioId
    },
    // ...optimistic.delete({ keys: [portfoliosQK] }),
  })
}
