import type { IUseCase } from 'contracts/useCase'
import type { TAcaoProps } from 'entities/Acao.entity'
import { AcaoEntity } from 'entities/Acao.entity'
import { AcoesRepository } from 'repositories/acoes.repository'

export class DeleteAcaoUseCase implements IUseCase<AcaoEntity> {
  constructor(private readonly acoesRepository: AcoesRepository) {}

  async execute(props: Pick<TAcaoProps, 'id'>) {
    this.acoesRepository.deleteAcao(props.id as string)
  }
}
