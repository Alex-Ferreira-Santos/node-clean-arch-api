import { IHttpAdapter } from 'contracts/HttpAdapter'
import { GetAcoesUseCase } from 'usecases/acoes/getAcoes.usecase'
import { CreateAcaoUseCase } from 'usecases/acoes/createAcao.usecase'
import { UpdateAcaoUseCase } from 'usecases/acoes/updateAcao.usecase'
import { DeleteAcaoUseCase } from 'usecases/acoes/deleteAcao.usecase'
import { updateAndCreateActionValidation } from 'validators/acoes/updateAndCreateActionValidation'
import { TAcaoProps } from 'entities/Acao.entity'
import { ErrorHandler } from 'errors/errorHandler'

export class AcoesController {
  constructor(
    private readonly getAcoesUseCase: GetAcoesUseCase,
    private readonly createAcaoUseCase: CreateAcaoUseCase,
    private readonly updateAcaoUseCase: UpdateAcaoUseCase,
    private readonly deleteAcaoUseCase: DeleteAcaoUseCase
  ) {}

  async getAcoes(ctx: IHttpAdapter) {
    try {
      const acoes = await this.getAcoesUseCase.execute()
      ctx.send({ status: 200, data: acoes })
    } catch (error: any) {
      ErrorHandler.handler(error, ctx)
    }
  }

  async createAcao(ctx: IHttpAdapter) {
    try {
      const body = ctx.getBody() as TAcaoProps
      const validatedBody = await updateAndCreateActionValidation(body)
      const acaoId = await this.createAcaoUseCase.execute(validatedBody)
      ctx.send({ status: 200, data: acaoId })
    } catch (error: any) {
      ErrorHandler.handler(error, ctx)
    }
  }

  async updateAcao(ctx: IHttpAdapter) {
    try {
      const params = ctx.getParams() as Pick<TAcaoProps, 'id'>
      const body = ctx.getBody() as TAcaoProps
      const validatedBody = await updateAndCreateActionValidation(body)
      await this.updateAcaoUseCase.execute({
        ...validatedBody,
        id: params.id
      })
      ctx.send({ status: 200, data: 'success' })
    } catch (error: any) {
      ErrorHandler.handler(error, ctx)
    }
  }

  async deleteAcao(ctx: IHttpAdapter) {
    try {
      const params = ctx.getParams() as Pick<TAcaoProps, 'id'>

      await this.deleteAcaoUseCase.execute({ id: params.id })
      ctx.send({ status: 200, data: 'success' })
    } catch (error: any) {
      ErrorHandler.handler(error, ctx)
    }
  }
}
