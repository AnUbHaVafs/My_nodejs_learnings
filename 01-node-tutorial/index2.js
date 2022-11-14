const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome To Home Page ');
    }
    if (req.url == '/about') {
        res.end('Here is our short History!');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for doesnot exist</p>
    <a href="/">Back Home</a>
    `)

})
server.listen(5000);