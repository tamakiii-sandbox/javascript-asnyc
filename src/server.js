const path = require('path')

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'))
})
server.get('/dist/index.js', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.js'))
})

server.use(middlewares)
server.use('/api', router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})