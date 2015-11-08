
/**
 * Module dependencies
 */

import Koa from 'koa'
import logger from 'koa-logger'
import compose from 'koa-compose'
import bodyParser from 'koa-bodyparser'

import * as msgs from './app/routes/messages'

const app = new Koa()

app.use(logger())
app.use(bodyParser())

// routes
app.use(msgs.create)

const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening on port ${port}`))
