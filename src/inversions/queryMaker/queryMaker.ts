import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { ResultOf, VariablesOf } from "gql.tada"
import { DocumentNode } from "graphql"
import { Api } from "../api"
import optimistic from "./optimisticStrategies"
import { MutationOptions, QueryOptions } from "./types"

/** Creates a `react-query` **mutation** */
export const createUseMutation = useMutation

/** Creates a `react-query` **query** */
export const createUseQuery = useQuery

/** Creates a `GraphQL`-friendly `react-query` **query** */
export const createGraphQlUseQuery = (
  query: DocumentNode,
  { queryKey, onSuccess }: QueryOptions
) => {
  return createUseQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const data = await Api.POST<ResultOf<typeof query>>({
        query,
      })
      // TODO: Call, only if there is no req error
      onSuccess && onSuccess(data)
      return data
    },
  })
}

/** Creates a `GraphQL`-friendly `react-query` **mutation** */
export const createGraphQlUseMutation = (
  query: DocumentNode,
  { queryKey, optimisticUpdateType, onSuccess }: MutationOptions
) => {
  const queryClient = useQueryClient()
  return createUseMutation({
    mutationFn: async (variables: VariablesOf<typeof query>) => {
      const data = await Api.POST<ResultOf<typeof query>>({
        query,
        variables,
      })
      // TODO: Call, only if there is no req error
      onSuccess && onSuccess(data)
      return data
    },
    // TODO: Better code
    ...(optimisticUpdateType
      ? optimistic[optimisticUpdateType]({ keys: [queryKey] })
      : {
          onSuccess: () => {
            !onSuccess &&
              queryClient.invalidateQueries({ queryKey: [queryKey] })
          },
        }),
  })
}
