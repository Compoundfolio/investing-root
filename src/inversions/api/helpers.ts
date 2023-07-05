import { LocalStorageKeysDictionary } from "src/core/consts"

export const withAuthenticationJWT = (withToken?: boolean): HeadersInit => {
  const authToken = localStorage.getItem(LocalStorageKeysDictionary.AUTH_TOKEN)
  return withToken ? { Authentication: `Bearer ${authToken}` } : {}
}

export const getHttpRequestResult = async (response: Response) => {
  const status = response.status.toString()
  const res = await response.json()

  if (status.startsWith("4") || status.startsWith("5")) {
    throw new Error(res) // res will contain error
  }

  return res
}
