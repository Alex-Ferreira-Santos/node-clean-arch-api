import { AcoesController } from 'controllers/AcoesController'
import { GetAcoesUseCase } from 'usecases/acoes/getAcoes.usecase'
import { CreateAcaoUseCase } from 'usecases/acoes/createAcao.usecase'
import { UpdateAcaoUseCase } from 'usecases/acoes/updateAcao.usecase'
import { DeleteAcaoUseCase } from 'usecases/acoes/deleteAcao.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

export class AcoesControllerFactory {
  static create(
    acoesRepository = new AcoesRepository(),
    getAcoesUseCase = new GetAcoesUseCase(acoesRepository),
    createAcaoUseCase = new CreateAcaoUseCase(acoesRepository),
    updateAcaoUseCase = new UpdateAcaoUseCase(acoesRepository),
    deleteAcaoUseCase = new DeleteAcaoUseCase(acoesRepository)
  ) {
    return new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
  }
}
