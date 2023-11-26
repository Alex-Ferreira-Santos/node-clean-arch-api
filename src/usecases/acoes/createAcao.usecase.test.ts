import { CreateAcaoUseCase } from './createAcao.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

describe('CreateAcaoUseCase', () => {
  it('should create an acao', async () => {
    const repository = new AcoesRepository()
    const useCase = new CreateAcaoUseCase(repository)
    const result = await useCase.execute({
      amount: 100,
      price: 1000,
      ticket: 'ITSA4'
    })
    expect(result).toBe('1')
  })
})
