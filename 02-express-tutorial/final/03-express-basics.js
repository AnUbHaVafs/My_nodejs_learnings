const express = require('express')///----------->const express = require('express')() can also be used
const app = express() ///-----------------> similar to const server = http.createServer((req,res)=>{})
// so bascially imagine everything as 
// app ==== http.createServer, that's it !
app.get('/', (req, res) => {
  // whenever user performs the GET request (read request) on root server , then we will invoke this callback
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})
// 200 status code means request is successful

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

