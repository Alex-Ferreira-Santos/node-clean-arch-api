import { ExpressAdapter } from 'adapters/expressAdapter'
import { Router } from 'express'
import { AcoesControllerFactory } from 'factories/acoesControllerFactory'

export const acoes = Router()

const acoesController = AcoesControllerFactory.create()

// Get
acoes.get('/', async (req, res) => {
  const expressAdapter = new ExpressAdapter(req, res)
  acoesController.getAcoes(expressAdapter)
})

// Post
acoes.post('/', async (req, res) => {
  const expressAdapter = new ExpressAdapter(req, res)
  acoesController.createAcao(expressAdapter)
})

// Put
acoes.put('/:id', async (req, res) => {
  const expressAdapter = new ExpressAdapter(req, res)
  acoesController.updateAcao(expressAdapter)
})

// Delete
acoes.delete('/:id', async (req, res) => {
  const expressAdapter = new ExpressAdapter(req, res)
  acoesController.deleteAcao(expressAdapter)
})
