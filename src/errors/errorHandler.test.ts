import { ErrorHandler } from './errorHandler'
import { ValidationError } from 'yup'

import type { IHttpAdapter } from 'contracts/HttpAdapter'

describe('ErrorHandler', () => {
  it('should handler a validation error', () => {
    const send = jest.fn()
    const HttpAdapter = {
      send
    } as unknown as IHttpAdapter
    const validationError = new ValidationError('test', 'ValidationError')
    ErrorHandler.handler(validationError, HttpAdapter)

    expect(send).toHaveBeenCalledWith(validationError)
  })

  it('should handler a normal error', () => {
    const send = jest.fn()
    const HttpAdapter = {
      send
    } as unknown as IHttpAdapter
    const error = new Error('test')
    ErrorHandler.handler(error, HttpAdapter)

    expect(send).toHaveBeenCalledWith({status: 400, data: error.message})
  })
})
