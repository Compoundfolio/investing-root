import type { HttpGetRequest, HttpPostRequest } from "./types"
import { LocalStorageKeysDictionary } from '../../core/consts/localStorageKeys';

// TODO: Reuse stuff ...

/** Abstraction layer for HTTP requests */
class Api {
  static async GET<TResponse>({
    url,
    withToken = true
  }: HttpGetRequest): Promise<TResponse> {
    const authToken = localStorage.getItem(LocalStorageKeysDictionary.AUTH_TOKEN)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...(withToken) && { "Authentication": `Bearer ${authToken}` },
      }
    })
    const data = await response.json()
    return data.results
  }

  static async POST<TResponse>({
    url,
    data,
    withToken = true
  }: HttpPostRequest): Promise<TResponse> {
    const authToken = localStorage.getItem(LocalStorageKeysDictionary.AUTH_TOKEN)
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(withToken) && { "Authentication": `Bearer ${authToken}` },
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()
    return res
  }
}

export default Api
