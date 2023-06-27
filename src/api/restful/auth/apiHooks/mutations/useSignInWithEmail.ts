import { UseMutationOptions, useMutation } from "@tanstack/react-query"
import requestSignInWithEmail from "../../requestSignInWithEmail"

const signInOptions: UseMutationOptions = {
  onSuccess: () => {},
  onError: () => {},
  mutationKey: ["useSignIn"],
}

const useSignInWithEmail = ({ data }) => {
  const { mutate, ...rest } = useMutation(
    () => requestSignInWithEmail({ data }),
    signInOptions
  )
  return {
    callSignIn: mutate,
    ...rest,
  }
}

export default useSignInWithEmail