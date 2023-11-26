import { AcaoEntity } from './Acao.entity'

describe('AcaoEntity', () => {
  it('shoud get all acoes props', () => {
    const acao = new AcaoEntity({
      id: '123',
      amount: 100,
      price: 1000,
      ticket: 'ITSA4'
    })

    expect(acao.id).toBe('123')
    expect(acao.amount).toBe(100)
    expect(acao.price).toBe(1000)
    expect(acao.ticket).toBe('ITSA4')
  })
})
