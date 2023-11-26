import type { IUseCase } from 'contracts/useCase'
import { AcaoEntity } from 'entities/Acao.entity'
import { AcoesRepository } from 'repositories/acoes.repository'

export class GetAcoesUseCase implements IUseCase<void,AcaoEntity[]> {
  constructor(private readonly acoesRepository: AcoesRepository) {}

  async execute() {
    return this.acoesRepository.getAcoes()
  }
}
