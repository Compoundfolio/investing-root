import { IMutationHookRequestFunctionProps } from "src/inversions/queryMaker"

export interface IRequestSignInWithGoogle
  extends IMutationHookRequestFunctionProps {
  data: any // TODO:
}

export interface AuthWithGooglePreRedirectResponse {
  state: string
}
