import { createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { SignInWithEmailResponse } from "../../../types"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { IRequestSignInWithEmail, IUseSignInWithEmail } from "./types"

export const signInWithEmailMutationKey = "useSignIn" as const

const requestAuthWithEmail = async ({
  data,
  authType,
}: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: authType === "signIn"
      ? restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL
      : restfulApiUrls.auth.SIGN_UP_WITH_EMAIL_URL,
    data,
  })
}

const useAuthWithEmail = <
  Response extends SignInWithEmailResponse,
  ErrorResponse extends HttpRequestErrorResponse,
  Data extends IRequestSignInWithEmail
>({
  onSuccess,
  onError,
}: IUseSignInWithEmail<Response, ErrorResponse, Data>) => {
  return createUseMutation<
    Response,
    ErrorResponse,
    Data
  >({
    mutationFn: ({ data, authType }: Data) => requestAuthWithEmail({ data, authType }),
    mutationKey: [signInWithEmailMutationKey],
    onSuccess,
    onError,
  })
}

export default useAuthWithEmail
