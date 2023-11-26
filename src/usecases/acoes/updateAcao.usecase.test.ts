import { UpdateAcaoUseCase } from './updateAcao.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

describe('UpdateAcaoUseCase', () => {
  it('should update an acao', async () => {
    const repository = new AcoesRepository()
    const useCase = new UpdateAcaoUseCase(repository)
    const result = await useCase.execute({
      amount: 100,
      price: 1000,
      ticket: 'ITSA4',
      id: '1'
    })
    expect(result).toBe(undefined)
  })
})
