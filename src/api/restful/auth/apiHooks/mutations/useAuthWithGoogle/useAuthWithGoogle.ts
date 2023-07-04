import { MutationHook, createUseMutation } from "src/inversions/queryMaker"
import restfulApiUrls from "src/api/restful/urls"
import { Api } from "src/inversions"
import { HttpRequestErrorResponse } from "../../../../../../inversions/api/types"
import { AuthWithGooglePreRedirectResponse } from "./types"
import { ROUTES } from "src/routing"

// const API_URL = window.location.origin
// const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth"
// const CLIENT_ID = "931638889409-sae0418fd2avajvedptnmcpb7hh85ue0.apps.googleusercontent.com"
// const REDIRECT_URI = API_URL + "/static/callback.html"

// const login_with_google = () => {
//     success("Loading...")
//     fetch(API_URL + "/auth/state")
//         .then(response => {
//             if (response.status == "200") {
//                 return response.json()
//             } else {
//                 response.text().then(failure)
//             }
//         })
//         .then(body => {
//             const auth_src = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}` +
//                 `&response_type=code&scope=${encodeURIComponent("openid email")}` +
//                 `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
//                 `&state=${body.state}`
//             window.location.href = auth_src
//         })
//         .catch(e => {
//             console.error(e)
//             failure(e)
//         })
// }

export const authWithGoogleMutationKey = "useAuthWithGoogle" as const

const requestAuthWithGoogle = async () => {
  const resp = await Api.GET<AuthWithGooglePreRedirectResponse>({
    url: restfulApiUrls.auth.AUTH_WITH_GOOGLE_URL,
  })

  const redirectUrl = window.location.origin + ROUTES.BROKERAGES_SELECTION // TODO: Change to dashboard

  const authSrc =
    `${process.env.NEXT_GOOGLE_AUTH_ENDPOINT_URL}?client_id=${process.env.NEXT_GOOGLE_AUTH_CLIENT_ID}` +
    `&response_type=code&scope=${encodeURIComponent("openid email")}` +
    `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
    `&state=${resp.state}`

  // TODO: I assume, it worth it to make redirection via Nex.js -provided tools
  window.location.href = authSrc

  // TODO: Figure out, where {token} data are coming from here
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
