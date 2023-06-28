export interface ICreateMutation<TSuccessfulResponse> {
  requestCb: (...args: unknown[]) => Promise<TSuccessfulResponse>
  mutationKey: string
}
