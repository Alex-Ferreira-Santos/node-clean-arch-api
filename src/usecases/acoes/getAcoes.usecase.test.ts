import { GetAcoesUseCase } from './getAcoes.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

describe('GetAcoesUseCase', () => {
  it('should get ações', async () => {
    const repository = new AcoesRepository()
    const useCase = new GetAcoesUseCase(repository)
    const result = await useCase.execute()
    expect(result).toStrictEqual([])
  })
})
