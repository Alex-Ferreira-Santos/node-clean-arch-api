import { ValidationError as YupValidationError } from 'yup'
import { ValidationError } from './validationError'
import { IHttpAdapter } from 'contracts/HttpAdapter'

export class ErrorHandler {
  static handler(error: unknown, ctx: IHttpAdapter) {
    if (error instanceof YupValidationError) {
      const validationError = new ValidationError(error)
      ctx.send(validationError)
    }

    ctx.send({ status: 400, data: (error as Error).message })
  }
}
