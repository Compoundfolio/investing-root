import { MutationHook, createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { SignInWithEmailResponse } from "../../../types"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { IRequestSignInWithEmail } from "./types"

export const signInWithEmailMutationKey = "useSignIn" as const

const requestAuthWithGoogle = async ({
  data,
}: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.AUTH_WITH_GOOGLE_URL,
    data,
  })
}

const useAuthWithGoogle: MutationHook<
  SignInWithEmailResponse,
  HttpRequestErrorResponse,
  IRequestSignInWithEmail
> = ({
  onSuccess,
  onError,
}) => {
    return createUseMutation({
      mutationFn: ({ data, authType }) => requestAuthWithGoogle({ data, authType }),
      mutationKey: [signInWithEmailMutationKey],
      onSuccess,
      onError,
    })
  }

export default useAuthWithGoogle
