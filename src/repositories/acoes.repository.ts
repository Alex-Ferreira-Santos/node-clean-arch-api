import { AcaoEntity } from 'entities/Acao.entity'

export class AcoesRepository {
  constructor() {}

  async getAcoes(): Promise<AcaoEntity[]> {
    return []
  }

  async createAcao(acao: AcaoEntity): Promise<string> {
    return '1'
  }

  async updateAcao(acao: AcaoEntity): Promise<void> {}

  async deleteAcao(acaoId: string): Promise<void> {}
}
