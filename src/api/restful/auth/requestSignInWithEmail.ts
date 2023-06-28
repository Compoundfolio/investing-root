import { Api } from "src/inversions"
import { SignInWithEmailResponse } from "./types"
import restfulApiUrls from "../urls"
import { IUseSignInWithEmail } from "./apiHooks"

interface IRequestSignInWithEmail extends IUseSignInWithEmail {}

const requestSignInWithEmail = async ({ data }: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL,
    data,
  })
}

export default requestSignInWithEmail
