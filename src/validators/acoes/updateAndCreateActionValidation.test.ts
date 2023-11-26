import { updateAndCreateActionValidation } from './updateAndCreateActionValidation'

describe('updateAndCreateActionValidation', () => {
  it('should validate the data from a create and update acao route', async () => {
    const data = await updateAndCreateActionValidation({
      ticket: 'ITSA4',
      price: 1000,
      amount: 100
    })

    expect(data).toStrictEqual({
      ticket: 'ITSA4',
      price: 1000,
      amount: 100
    })
  })
})
