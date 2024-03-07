import { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"
import { ResultOf } from "gql.tada"
import { DocumentNode } from "graphql"
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

type Options = {
  queryKey: string
  onSuccess?: (reqResultData: ResultOf<DocumentNode>) => void
}

export type QueryOptions = Options & {}

export type MutationOptions = Options & {
  optimisticUpdateType?: keyof typeof optimistic
}
