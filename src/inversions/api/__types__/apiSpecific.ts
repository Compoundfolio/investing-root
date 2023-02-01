type AxiosSpecificReqProps = {
  url: string
}

export type Get = AxiosSpecificReqProps

export type Post = AxiosSpecificReqProps & {
  data: object
}