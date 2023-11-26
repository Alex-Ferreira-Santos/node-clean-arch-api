import { number, object, string } from 'yup'

export function updateAndCreateActionValidation(body: unknown) {
  const schema = object().shape({
    ticket: string().required(),
    price: number().required().positive(),
    amount: number().required().positive()
  })

  return schema.validate(body)
}
