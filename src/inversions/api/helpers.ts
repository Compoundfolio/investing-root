import { LocalStorageKeysDictionary } from "src/core/consts"

export const withAuthenticationJWT = (withToken?: boolean): HeadersInit => {
  const authToken = localStorage.getItem(LocalStorageKeysDictionary.AUTH_TOKEN)
  return withToken ? { Authentication: `Bearer ${authToken}` } : {}
}
