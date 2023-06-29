import { Api } from "src/inversions"
import { EmailAuthData, SignInWithEmailResponse } from "./types"
import restfulApiUrls from "../urls"

interface IRequestSignInWithEmail {
  data: EmailAuthData
}

const requestSignInWithEmail = async ({ data }: IRequestSignInWithEmail) => {
  return await Api.POST<SignInWithEmailResponse>({
    url: restfulApiUrls.auth.SIGN_IN_WITH_EMAIL_URL,
    data,
  })
}

export default requestSignInWithEmail
