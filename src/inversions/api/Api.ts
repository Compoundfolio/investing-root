import type { HttpGetRequest, HttpPostRequest } from "./types"
import { getHttpRequestResult, withAuthenticationJWT } from "./helpers"
import { buildUrl } from "./consts"

/** Abstraction layer for HTTP requests */
class Api {
  static async GET<TResponse>({
    url,
    withToken = true,
  }: HttpGetRequest): Promise<TResponse> {
    const response = await fetch(buildUrl(url), {
      method: "GET",
      headers: {
        ...withAuthenticationJWT(withToken),
      },
    })

    return await getHttpRequestResult(response)
  }

  static async POST<TResponse>({
    url,
    data,
    query,
    withToken = true,
  }: HttpPostRequest): Promise<TResponse> {
    const endpoint = url ? buildUrl(url) : "https://api.spacex.land/graphql/"
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...withAuthenticationJWT(withToken),
      },
      body: JSON.stringify(data),
    })

    return await getHttpRequestResult(response)
  }
}

export default Api
