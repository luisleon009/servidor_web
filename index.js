const http = require ('http')
const port = 5001

const server = http.createServer((req, res) => {
    res.end('Hola Alumnos')
})

server.listen(port, () => {
    console.log('Arrancar el servidor')
})