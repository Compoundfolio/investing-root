import { useMutation } from "@tanstack/react-query"
import requestSignInWithEmail, { ResponseType } from "../../requestSignInWithEmail"
import { EmailAuthData } from "../../types"
import { HttpRequestErrorResponse } from "src/inversions/api/types"

export const useSignInWithEmailKey = "useSignIn" as const

export interface IUseSignInWithEmail {
  data: EmailAuthData
}

const useSignInWithEmail = ({ data }: IUseSignInWithEmail) => {
  return useMutation<
    ResponseType,
    HttpRequestErrorResponse,
    IUseSignInWithEmail["data"]
  >(
    () => requestSignInWithEmail({ data }),
    { mutationKey: [ useSignInWithEmailKey ] }
  )
}

export default useSignInWithEmail