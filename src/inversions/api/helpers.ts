import { LocalStorageKeysDictionary } from "src/core/consts"
import { baseApiUrls } from "./consts"

export const buildReqUrl = (
  path: string,
  isGraphQlRequest: boolean = false
): string => {
  if (isGraphQlRequest) return baseApiUrls.GRAPHQL!

  if (!path.startsWith("/"))
    throw new Error(
      "Wrong usage of `buildUrl` function. Path should starts with '/'"
    )

  return `${baseApiUrls.REST}${path}`
}

export const withAuthenticationJWT = (withToken?: boolean): HeadersInit => {
  const authToken = localStorage.getItem(LocalStorageKeysDictionary.AUTH_TOKEN)
  return withToken ? { Authorization: `Bearer ${authToken}` } : {}
}

export const getHttpRequestResult = async (response: Response) => {
  const status = response.status.toString()
  const res = await response.json()

  if (status.startsWith("4") || status.startsWith("5")) {
    throw new Error(res) // res will contain error
  }

  return res
}
