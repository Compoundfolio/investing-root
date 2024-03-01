import { LocalStorageKeysDictionary } from "src/core/consts"
import { DEFAULT_REQ_ERROR_MESSAGE, baseApiUrls } from "./consts"
import { toast } from "sonner"

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

export const handleHttpRequestResult = async (
  response: Response,
  customErrorMessage?: string
  // TODO: showErrorWithToast = true
) => {
  if (response.status >= 400) {
    const message = customErrorMessage ?? DEFAULT_REQ_ERROR_MESSAGE
    toast("Server error", {
      description: message,
      action: {
        label: "Close",
        onClick: () => {},
      },
    })
    throw new Error(message)
  }

  const res = await response.json()

  return res.data
}
