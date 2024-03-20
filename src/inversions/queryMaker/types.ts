import { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ResultOf, VariablesOf } from "gql.tada"
import optimistic from "./optimisticStrategies"

interface IMutationHookProps<Response, ErrorResponse, Data = void> {
  onSuccess: UseMutationOptions<Response, ErrorResponse, Data>["onSuccess"]
  onError: UseMutationOptions<Response, ErrorResponse, Data>["onError"]
}

export interface IMutationHookRequestFunctionProps {
  data: unknown
}

export type MutationHook<Response, ErrorResponse, Data = void> = ({
  onSuccess,
  onError,
}: IMutationHookProps<Response, ErrorResponse, Data>) => UseMutationResult<
  Response,
  ErrorResponse,
  Data
>

type Options<TQuery> = {
  queryKey: string
  onSuccess?: (reqResultData: ResultOf<TQuery>) => void
}

export type QueryOptions<TQuery> = Options<TQuery> & {
  variables?: VariablesOf<TQuery>
}

export type MutationOptions<TQuery> = Options<TQuery> & {
  optimisticUpdateType?: keyof typeof optimistic
}
