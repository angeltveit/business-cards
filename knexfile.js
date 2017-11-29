const {parse} = require('pg-connection-string')

module.exports = {
  client: 'pg',
  connection: parse(process.env.DATABASE_URL || 'postgres://localhost/cards'),
}
