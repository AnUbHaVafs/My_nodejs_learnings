const express = require('express')
const app = express()
const morgan = require('morgan') // first install it : npm i morgan
// const logger = require('./logger')
// const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
// now let's understand what's this ?
// this is a built-in middleware function that express provides
// this static middleware function looks for the public folder always 
// and this set all the comntents of the public folder to static assets and so that they will be available whenevr they are required by another resources\

// 1. use vs route (how to use app.route to different routes)
// 2. types of middlware : own(like logger/authorize), express(built-in : static), third party(morgan)


app.use(morgan('tiny')) // now run node code

app.get('/', (req, res) => {  //GET / 200 4 - 5.308 ms --o/p using third-party middleware morgan
  res.send('Home')
})
app.get('/about', (req, res) => {      //GET /about 200 5 - 4.470 ms   
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
