import { initGraphQLTada } from "gql.tada"
import type { introspection } from "./graphql-env.d.ts"

type GqlDateTime = string
type GqlJSON = any

export const graphql = initGraphQLTada<{
  introspection: introspection
  scalars: {
    DateTime: GqlDateTime
    JSON: GqlJSON
  }
}>()

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada"
export { readFragment } from "gql.tada"
