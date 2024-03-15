import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ResultOf, TadaDocumentNode, VariablesOf } from "gql.tada"
import { DocumentNode } from "graphql"
import { Api } from "../api"
import optimistic from "./optimisticStrategies"
import { MutationOptions, QueryOptions } from "./types"

/** Creates a `react-query` **mutation** */
export const createUseMutation = useMutation

/** Creates a `react-query` **query** */
export const createUseQuery = useQuery

/** Creates a `GraphQL`-friendly `react-query` **query** */
export const createGraphQlUseQuery = <TQuery extends TadaDocumentNode>(
  query: DocumentNode,
  { queryKey, onSuccess }: QueryOptions<TQuery>
) => {
  return createUseQuery<ResultOf<TQuery>, Error, ResultOf<TQuery>>({
    queryKey: [queryKey],
    queryFn: async () => {
      const data = await Api.POST<ResultOf<TQuery>>({
        query,
      })
      // TODO: Call, only if there is no req error
      onSuccess && onSuccess(data)
      return data
    },
  })
}

/** Creates a `GraphQL`-friendly `react-query` **mutation** */
export const createGraphQlUseMutation = <TQuery extends TadaDocumentNode>(
  query: DocumentNode,
  { queryKey, optimisticUpdateType, onSuccess }: MutationOptions<TQuery>
) => {
  const queryClient = useQueryClient()
  return createUseMutation<ResultOf<TQuery>, Error, VariablesOf<TQuery>>({
    mutationFn: async (variables: VariablesOf<TQuery>) => {
      const data = await Api.POST<ResultOf<TQuery>>({
        query,
        variables,
      })
      // TODO: Call, only if there is no req error
      onSuccess && onSuccess(data)
      return data
    },
    // TODO: Better code
    // ...(optimisticUpdateType
    //   ? optimistic[optimisticUpdateType]({ keys: [queryKey] })
    //   : {
    //       onSuccess: () => {
    //         !onSuccess &&
    //           queryClient.invalidateQueries({ queryKey: [queryKey] })
    //       },
    //     }),
  })
}
