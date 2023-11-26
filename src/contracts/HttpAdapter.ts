import type { IncomingHttpHeaders } from 'http'

export interface IHttpAdapter {
  getBody: () => unknown
  getParams: () => unknown
  getQueryParams: () => unknown
  getHeaders: () => IncomingHttpHeaders
  send: (props: { status: number, data: any }) => void
}
