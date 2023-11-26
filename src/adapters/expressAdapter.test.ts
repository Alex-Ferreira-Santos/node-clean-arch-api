import { ExpressAdapter } from './expressAdapter'
import { Request, Response } from 'express'

describe('ExpressAdapter', () => {
  const req = {
    body: { stockId: 1 },
    query: { limit: 1 },
    params: { id: 123 },
    headers: {
      authorization: 'Bearer bla bla bla'
    }
  } as unknown as Request
  const res = {} as Response

  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  it('should get request body', () => {
    const val = new ExpressAdapter(req, res)
    expect(val.getBody()).toStrictEqual({ stockId: 1 })
  })

  it('should get request query params', () => {
    const val = new ExpressAdapter(req, res)
    expect(val.getQueryParams()).toStrictEqual({ limit: 1 })
  })

  it('should get request params', () => {
    const val = new ExpressAdapter(req, res)
    expect(val.getParams()).toStrictEqual({ id: 123 })
  })

  it('should get request headers', () => {
    const val = new ExpressAdapter(req, res)
    expect(val.getHeaders()).toStrictEqual({
      authorization: 'Bearer bla bla bla'
    })
  })
  it('should send the response data', () => {
    const val = new ExpressAdapter(req, res)
    val.send({ status: 200, data: 'success' })
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith('success')
  })
})
