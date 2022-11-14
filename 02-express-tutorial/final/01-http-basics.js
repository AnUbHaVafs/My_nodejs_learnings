const http = require('http')
// example.html use it for an example to read the data html from
// use the below to code to read the html file and render its data on web using server
// const {readFilesync} = require('fs')
// const homePage = readFilesync('../final-01-http.html');

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>home page</h1>')
    // res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)


// // // console.log('Express Tutorial')

// // const http = require('http')

// // const server = http.createServer((req, res) => {
// //     // jaise hi user requestkrega server ki , yeh callback invoke ho jayega
// //     console.log("user hit the server");
// //     // Must have response.end() for every response, else we that request won't get complete
// //     // and the server will continuouly wait foir the message to be coomplete and that spin load continues
// //     res.end("Hi ! Let's Show !")
// // })
// // server.listen(5000);
// // /// 2 major issues are :
// // // 1. we are not sending any data to the browser
// // // 2. we are not dealing with the different urls as well.s
// // // first we are deaing with the 1st problem ofc anf then next

// const http = require('http')
// const server = http.createServer((req, res) => {
//     // console.log("user hit the server")
//     // res.end('Home Page');

//     // res.writeHead(200, { 'content-type': 'text/html' }) //---> res.writeHead(status_code(request is successful or not), header(to let the browser kmow that whioch type of content we are going tpo pass and lat the browser know hpot to render this data))
//     res.writeHead(200, { 'content-type': 'text/plain' })
//     res.write('<h1>Home Page !</h1>')
//     res.end();

// })
// server.listen(5000)


// // res.writeHead(200, { 'content-type': 'text/html' })
//                                         //    |
//                                         //    |
//                                         //    |
//                                         // Now whatever the studd you are going type here MATTERS !
// // consider 2nd example 
// // html, plain thes are the media types called mime types go to MDN for more.