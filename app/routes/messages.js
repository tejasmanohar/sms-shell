
/**
 * Module dependencies
 */

import { send } from '../../lib/sms'

require('shelljs/global')

/**
 * Route definitions
 */

export function *create (next) {
  yield next
  const { Body, From } = this.request.body
  yield send({ to: From, body: exec(Body).output })
  this.body = ''
}
