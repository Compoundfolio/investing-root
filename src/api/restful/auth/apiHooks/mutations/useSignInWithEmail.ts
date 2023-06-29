import { UseMutationOptions } from "@tanstack/react-query"
import { createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { EmailAuthData, SignInWithEmailResponse } from "../../types"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from '../../../../../inversions/api/types';

export const useSignInWithEmailKey = "useSignIn" as const

interface IRequestSignInWithEmail {
  data: EmailAuthData
}
export const requestSignInWithEmail = async ({
  data,
}: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL,
    data,
  })
}

type MutationOptions = UseMutationOptions<
  SignInWithEmailResponse,
  HttpRequestErrorResponse,
  IRequestSignInWithEmail["data"]
>
export interface IUseSignInWithEmail {
  onSuccess: MutationOptions["onSuccess"]
  onError: MutationOptions["onError"]
}
const useSignInWithEmail = ({
  onSuccess,
  onError,
}: IUseSignInWithEmail) => {
  return createUseMutation<
    SignInWithEmailResponse,
    HttpRequestErrorResponse,
    IRequestSignInWithEmail["data"]
  >({
    mutationFn: (data: IRequestSignInWithEmail["data"]) => requestSignInWithEmail({ data }),
    mutationKey: [useSignInWithEmailKey],
    onSuccess,
    onError,
  })
}

export default useSignInWithEmail
