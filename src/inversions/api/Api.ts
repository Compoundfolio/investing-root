// import axios from "axios"
import type { Get, Post } from "./__types__"

/** Abstraction for axios */
class Api {
  static async GET({ url }: Get) {
    // return axios.get(url)
    // const response = await fetch(url);
    // const data = await response.json();
    // return data.results
  }

  static async POST({ url, data }: Post) {
    // return axios.post(url, { data })
  }
}

export default Api