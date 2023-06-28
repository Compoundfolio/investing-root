import { useMutation } from "@tanstack/react-query"
import { HttpRequestErrorResponse } from "../api/types"
import { ICreateMutation } from "./types"

/** Creates a `react-query` mutation */
export const createMutation = <TValues, TSuccessfulResponse>({
  requestCb,
  mutationKey,
}: ICreateMutation<TSuccessfulResponse>) => {
  return useMutation<TSuccessfulResponse, HttpRequestErrorResponse, TValues>({
    mutationFn: requestCb,
    mutationKey: [mutationKey],
  })
}
