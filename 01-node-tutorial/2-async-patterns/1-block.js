const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})


/* 
this is synchronous appraoch 
in this for loop is not asynchronous though a time consuming task,
so don't thik that only users requesting for about page only gets blocked ,
those requesting after than requesting for any page will also get blocked 
kyun?
kyunki for loop is synchronous and not an asynchronous ,
thats why it will not get offloaded ,
it will first execute completely and then other task will begin executing .
that's why we must use asyn approach always , so that asyn + time consuming tasks get offloaded
and other users don't get blocked and once the callback gets data or get successful , then e will invoke it.

*/