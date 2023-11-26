import express from 'express'
import { routes } from 'routes'

const server = express()

const port = 4000
server.use(routes)
server.listen(port, () => {
  console.log(`server start at port: ${port}`)
})
