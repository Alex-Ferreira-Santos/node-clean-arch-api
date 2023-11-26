import type { IUseCase } from 'contracts/useCase'
import type { TAcaoProps } from 'entities/Acao.entity'
import { AcaoEntity } from 'entities/Acao.entity'
import { AcoesRepository } from 'repositories/acoes.repository'

export class UpdateAcaoUseCase implements IUseCase<AcaoEntity> {
  constructor(private readonly acoesRepository: AcoesRepository) {}

  async execute(props: TAcaoProps) {
    const acao = new AcaoEntity(props)
    this.acoesRepository.updateAcao(acao)
  }
}
