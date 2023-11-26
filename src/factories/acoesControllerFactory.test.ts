import { AcoesControllerFactory } from './acoesControllerFactory'
import { AcoesController } from 'controllers/AcoesController'

describe('AcoesControllerFactory', () => {
  it('should create a instance of AcoesController', () => {
    const controller = AcoesControllerFactory.create()
    expect(controller).toBeInstanceOf(AcoesController)
  })
})
