const path = require('path')
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const app = express()

const PORT = process.env.PORT || 8000

app.enable('trust proxy')

app
  .use(bodyParser.json())
  .use('/assets', express.static(path.join(__dirname, '..', 'public', 'assets')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')))
  .use(express.static(path.join(__dirname, '..', 'build')))
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/', routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
