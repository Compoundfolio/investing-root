import { createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { SignInWithEmailResponse } from "../../../types"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { IRequestSignInWithEmail, IUseSignInWithEmail } from "./types"

export const useSignInWithEmailKey = "useSignIn" as const

const requestAuthWithGoggle = async ({
  data,
}: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.AUTH_WITH_GOOGLE_URL,
    data,
  })
}

const useAuthWithGoogle = ({ onSuccess, onError }: IUseSignInWithEmail) => {
  return createUseMutation<
    SignInWithEmailResponse,
    HttpRequestErrorResponse,
    IRequestSignInWithEmail
  >({
    mutationFn: ({ data }: IRequestSignInWithEmail) => requestAuthWithGoggle({ data }),
    mutationKey: [useSignInWithEmailKey],
    onSuccess,
    onError,
  })
}

export default useAuthWithGoogle