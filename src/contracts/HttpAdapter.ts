import type { IncomingHttpHeaders } from 'http'

export interface IHttpAdapter {
  getBody: () => void
  getParams: () => void
  getQueryParams: () => void
  getHeaders: () => IncomingHttpHeaders
  send: (props: { status: number, data: any }) => void
}
