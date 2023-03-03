// import axios from "axios"
import type { Get, Post } from "./__types__"

/** Abstraction for axios */
class Api {
  static async GET(url: string) {
    // return axios.get(url)
    // const response = await fetch(url);
    // const data = await response.json();
    // return data.results
  }

  static async POST(url: string, data: unknown) {
    // return axios.post(url, { data })
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
  }
}

export default Api