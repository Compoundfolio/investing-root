import requestSignInWithEmail from "../../requestSignInWithEmail"
import { EmailAuthData } from "../../types"
import { createMutation } from "src/inversions/reactQuery"

export const useSignInWithEmailKey = "useSignIn" as const

export interface IUseSignInWithEmail {
  data: EmailAuthData
}

const useSignInWithEmail = () => {
  return createMutation<
    IUseSignInWithEmail["data"],
    Awaited<ReturnType<typeof requestSignInWithEmail>>
  >({
    requestCb: (props: IUseSignInWithEmail) => requestSignInWithEmail(props),
    mutationKey: useSignInWithEmailKey,
  })
}

export default useSignInWithEmail
