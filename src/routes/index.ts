import { Router } from 'express'
import { acoes } from 'routes/acoes'

export const routes = Router()

routes.use('/acoes', acoes)
