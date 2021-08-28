const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Heres our history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Go back</a>
    `)
})

server.listen(5000)