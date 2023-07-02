import { UseMutationOptions } from "@tanstack/react-query"
import { EmailAuthData } from "../../../types"

export interface IRequestSignInWithEmail {
  data: EmailAuthData
  authType: EmailAuthType
}

export type EmailAuthType = "signIn" | "signUp"

export interface IUseSignInWithEmail<Response, ErrorResponse, Data> {
  onSuccess: UseMutationOptions<Response, ErrorResponse, Data>["onSuccess"]
  onError: UseMutationOptions<Response, ErrorResponse, Data>["onError"]
}