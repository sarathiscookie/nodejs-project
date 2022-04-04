const request = require('http')

const server = request.createServer( (err, res) => {
    console.log('Request event!')
    res.end('Hello World!!!!!!')
})

server.listen(5000, () => {
    console.log('Server listening on port: 5000....')
})