import { AcoesController } from './AcoesController'
import type { IHttpAdapter } from 'contracts/HttpAdapter'
import { GetAcoesUseCase } from 'usecases/acoes/getAcoes.usecase'
import { CreateAcaoUseCase } from 'usecases/acoes/createAcao.usecase'
import { UpdateAcaoUseCase } from 'usecases/acoes/updateAcao.usecase'
import { DeleteAcaoUseCase } from 'usecases/acoes/deleteAcao.usecase'
import { AcoesRepository } from 'repositories/acoes.repository'

describe('AcoesController', () => {
  const acoesRepository = new AcoesRepository()
  const getAcoesUseCase = new GetAcoesUseCase(acoesRepository)
  const createAcaoUseCase = new CreateAcaoUseCase(acoesRepository)
  const updateAcaoUseCase = new UpdateAcaoUseCase(acoesRepository)
  const deleteAcaoUseCase = new DeleteAcaoUseCase(acoesRepository)

  const send = jest.fn()
  it('shoud test the getAcoes route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send
    } as unknown as IHttpAdapter
    await acoesController.getAcoes(HttpAdapter)
    expect(send).toHaveBeenCalledWith({ status: 200, data: [] })
  })

  it('shoud break the getAcoes route', async () => {
    const acoesController = new AcoesController(
      {} as GetAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send
    } as unknown as IHttpAdapter
    await acoesController.getAcoes(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 400,
      data: 'this.getAcoesUseCase.execute is not a function'
    })
  })

  it('shoud test the createAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getBody: () => ({
        amount: 100,
        price: 1000,
        ticket: 'ITSA4'
      })
    } as unknown as IHttpAdapter
    await acoesController.createAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 200,
      data: '1'
    })
  })

  it('shoud break the createAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      {} as CreateAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getBody: () => ({
        amount: 100,
        price: 1000,
        ticket: 'ITSA4'
      })
    } as unknown as IHttpAdapter
    await acoesController.createAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 400,
      data: 'this.createAcaoUseCase.execute is not a function'
    })
  })

  it('shoud test the updateAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getParams: () => ({ id: '1' }),
      getBody: () => ({
        amount: 100,
        price: 1000,
        ticket: 'ITSA4'
      })
    } as unknown as IHttpAdapter
    await acoesController.updateAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 200,
      data: '1'
    })
  })

  it('shoud break the updateAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      {} as UpdateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getParams: () => ({ id: '1' }),
      getBody: () => ({
        amount: 100,
        price: 1000,
        ticket: 'ITSA4'
      })
    } as unknown as IHttpAdapter
    await acoesController.updateAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 400,
      data: 'this.updateAcaoUseCase.execute is not a function'
    })
  })

  it('shoud test the deleteAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      deleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getParams: () => ({ id: '1' })
    } as unknown as IHttpAdapter
    await acoesController.deleteAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 200,
      data: '1'
    })
  })

  it('shoud break the deleteAcao route', async () => {
    const acoesController = new AcoesController(
      getAcoesUseCase,
      createAcaoUseCase,
      updateAcaoUseCase,
      {} as DeleteAcaoUseCase
    )
    const HttpAdapter = {
      send,
      getParams: () => ({ id: '1' })
    } as unknown as IHttpAdapter
    await acoesController.deleteAcao(HttpAdapter)
    expect(send).toHaveBeenCalledWith({
      status: 400,
      data: 'this.deleteAcaoUseCase.execute is not a function'
    })
  })
})
