import { DeleteAcaoUseCase } from './deleteAcao.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

describe('DeleteAcaoUseCase', () => {
  it('should delete an acao', async () => {
    const repository = new AcoesRepository()
    const useCase = new DeleteAcaoUseCase(repository)
    const result = await useCase.execute({ id: '1' })
    expect(result).toBe(undefined)
  })
})
