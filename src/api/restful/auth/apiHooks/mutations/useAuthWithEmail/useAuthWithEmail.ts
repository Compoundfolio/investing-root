import { MutationHook, createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { SignInWithEmailResponse } from "../../../types"
import { Api, HttpRequestErrorResponse } from "src/inversions"
import { IEmailAuthRequestRequestBody } from "./types"

export const signInWithEmailMutationKey = "useAuthWithEmail" as const

const requestAuthWithEmail = async ({
  data,
  authType,
}: IEmailAuthRequestRequestBody) => {  
  alert(12333)
  return await Api.POST<SignInWithEmailResponse>({
    url:
      authType === "signIn"
        ? restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL
        : restfulApiUrls.auth.SIGN_UP_WITH_EMAIL_URL,
    data,
  })
}

const useAuthWithEmail: MutationHook<
  SignInWithEmailResponse,
  HttpRequestErrorResponse,
  IEmailAuthRequestRequestBody
> = ({ onSuccess, onError }) =>
  createUseMutation({
    mutationFn: requestAuthWithEmail,
    mutationKey: [signInWithEmailMutationKey],
    onSuccess,
    onError,
  })

export default useAuthWithEmail
