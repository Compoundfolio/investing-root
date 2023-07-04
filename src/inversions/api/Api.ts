import type { HttpGetRequest, HttpPostRequest } from "./types"
import { withAuthenticationJWT } from "./helpers"
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

    const data = await response.json()

    return data
  }

  static async POST<TResponse>({
    url,
    data,
    withToken = true,
  }: HttpPostRequest): Promise<TResponse> {
    const response = await fetch(buildUrl(url), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...withAuthenticationJWT(withToken),
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()
    return res
  }
}

export default Api
