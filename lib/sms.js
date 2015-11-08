
/**
 * Module dependencies
 */

import twilio from 'twilio';

const client = new twilio.RestClient(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export function send({ to, from, body }) {
  return client.sendMessage({
    to, body,
    from: process.env.TWILIO_PHONE_NUMBER
  })
}
