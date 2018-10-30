const path = require('path')
const config = require('./config.js')
const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, config.DB_FILE))

const middlewares = jsonServer.defaults()

// server.use(jsonServer.bodyParser)
server.use(middlewares)

// server.use((req, res, next) => {
//   res.header('X-Hello', 'World')
//   next()
// })

// router.render = (req, res) => {
//   res.json({
//     code: 0,
//     body: res.locals.data
//   })
// }
// server.use('/api', router)
server.use(router)

server.listen({
  host: config.HOST,
  port: config.PORT
}, function () {
  console.log(JSON.stringify(jsonServer));
  console.log(`JSON Server is running in http://${config.HOST}:${config.PORT}`)
})
