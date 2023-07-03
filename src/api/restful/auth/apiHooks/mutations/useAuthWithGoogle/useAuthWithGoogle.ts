import { MutationHook, createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { SignInWithEmailResponse } from "../../../types"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { IRequestSignInWithGoogle } from "./types"

export const signInWithEmailMutationKey = "useSignIn" as const

const requestAuthWithGoogle = async ({
  data,
}: IRequestSignInWithGoogle) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.AUTH_WITH_GOOGLE_URL,
    data,
  })
}

const useAuthWithGoogle: MutationHook<
  SignInWithEmailResponse,
  HttpRequestErrorResponse,
  IRequestSignInWithGoogle
> = ({
  onSuccess,
  onError,
}) => createUseMutation({
  mutationFn: requestAuthWithGoogle,
  mutationKey: [signInWithEmailMutationKey],
  onSuccess,
  onError,
})


export default useAuthWithGoogle
