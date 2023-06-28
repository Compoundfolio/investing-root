import type { HttpGetRequest, HttpPostRequest, HttpRequestErrorResponse } from "./types"

/** Abstraction layer for HTTP requests */
class Api {
  static async GET<TResponse>({ url }: HttpGetRequest): Promise<TResponse | HttpRequestErrorResponse> {
    const response = await fetch(url)
    const data = await response.json()
    return data.results
  }

  static async POST<TResponse>({
    url,
    data,
  }: HttpPostRequest): Promise<TResponse | HttpRequestErrorResponse> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()
    return res
  }
}

export default Api
