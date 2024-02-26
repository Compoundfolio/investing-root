import { MutationHook, createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/rest/urls"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { AuthWithGooglePreRedirectResponse } from "./types"

export const authWithGoogleMutationKey = "useAuthWithGoogle" as const

const requestAuthWithGoogle = async () => {
  const resp = await Api.GET<AuthWithGooglePreRedirectResponse>({
    url: restfulApiUrls.auth.AUTH_WITH_GOOGLE_URL,
  })

  // const redirectUrl = window.location.origin + ROUTES.BROKERAGES_SELECTION // TODO: Change to dashboard
  const redirectUrl = window.location.origin + "/auth/callback" // TODO: Change to dashboard

  const authSrc =
    `${process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENDPOINT_URL}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}` +
    `&response_type=code&scope=${encodeURIComponent("openid email")}` +
    `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    `&state=${resp.state}`

  // TODO: I assume, it worth it to make redirection via Nex.js -provided tools
  window.location.href = authSrc

  // TODO: POST call
}

const useAuthWithGoogle: MutationHook<any, HttpRequestErrorResponse> = ({
  onSuccess,
  onError,
}) =>
  createUseMutation({
    mutationFn: requestAuthWithGoogle,
    mutationKey: [authWithGoogleMutationKey],
    onSuccess,
    onError,
  })

export default useAuthWithGoogle
