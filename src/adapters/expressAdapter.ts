/* eslint-disable @typescript-eslint/space-before-function-paren */
import type { IHttpAdapter } from 'contracts/HttpAdapter'
import { type Request, type Response } from 'express'
import type { IncomingHttpHeaders } from 'http'

export class ExpressAdapter implements IHttpAdapter {
  constructor(private readonly req: Request, private readonly res: Response) {}

  getBody() {
    return this.req.body
  }

  getParams()  {
    return this.req.params
  }

  getQueryParams(){
    return this.req.query
  }

  getHeaders(): IncomingHttpHeaders {
    return this.req.headers
  }

  send({ data, status }: { status: number; data: unknown }) {
    return this.res.status(status).json(data) 
  }
}
