import { useMutation } from "@tanstack/react-query"
import requestSignInWithEmail from "../../requestSignInWithEmail"

export const useSignInWithEmailKey = "useSignIn" as const

const useSignInWithEmail = ({ data }) => {
  return useMutation(
    () => requestSignInWithEmail({ data }),
    { mutationKey: [ useSignInWithEmailKey ] }
  )
}

export default useSignInWithEmail