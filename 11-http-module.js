const http = require('http')

const server = http.createServer( (req, res) => {
    if(req.url === '/') {
        res.end("Welcome Onboard!")
        console.log(req.url)
    }
    if(req.url === '/about') {
        res.end("About US!")
        console.log(req.url)
    }
});

server.listen(5000)