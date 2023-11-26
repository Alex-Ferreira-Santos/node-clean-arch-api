import { ValidationError } from './validationError'

describe('ValidationError', () => {
  it('shoud create a ValidationError and get data', () => {
    const error = new ValidationError(new Error('test'))

    expect(error.data.status).toBe(422)
    expect(error.data.name).toBe('ValidationError')
    expect(error.data.message).toBe('test')
  })

  it('shoud create a ValidationError and get status', () => {
    const error = new ValidationError(new Error('test'))
    expect(error.status).toBe(422)
  })
})
