/* eslint-disable @typescript-eslint/space-before-function-paren */
import type { IHttpAdapter } from 'contracts/HttpAdapter'
import { type Request, type Response } from 'express'
import type { IncomingHttpHeaders } from 'http'

export class ExpressAdapter implements IHttpAdapter {
  constructor(private readonly req: Request, private readonly res: Response) {}

  getBody<T>(): T {
    return this.req.body
  }

  getParams<T>(): T {
    return this.req.params as T
  }

  getQueryParams<T>(): T {
    return this.req.query as T
  }

  getHeaders(): IncomingHttpHeaders {
    return this.req.headers
  }

  send<T>({ data, status }: { status: number; data: T }): T {
    return this.res.status(status).json(data) as T
  }
}
