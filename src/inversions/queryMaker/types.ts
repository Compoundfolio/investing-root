import { UseMutationOptions, UseMutationResult } from "@tanstack/react-query"

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
}: IMutationHookProps<Response, ErrorResponse, Data>) => UseMutationResult<Response, ErrorResponse, Data>