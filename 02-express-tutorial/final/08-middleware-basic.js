const express = require('express')
const app = express()

//2.  req => middleware => res
// middleware comes inbetween the req and res object , hence middle+ware function
// Why we need middleware function ?
// suppose I want to do some same functionalities in nearly every routes , then I have to paste that code
// to every route inside. ionstead I can a make function for that functionality and pass that function in every route
// so i MADE LOGGER function now, how to invoke it ?
// we hAVE TO PASS ITS reference inbetween req and res object in our route setup and
// now the que arises how middlewaqre have access to our req objwect ?
// well express by itself pass req, res, next function to our middleware aqutomatically 
// what is next ?
// we have to pass the cdontrol either to next middleware or we have to terminate that cyclwe by sending rsponse
// res.send("Hello") so remember this.


const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})
app.get('/api/products', logger, (req, res) => {
  res.send('Products')
})
app.get('/api/items', logger, (req, res) => {
  res.send('Items')
})
// we can alos now keep our logger in different file to just reduce ouyr ciode
// 3.now you can observe that if have thousands of routes than I have to pass this logger function
// to each route by by just writing my middleware function in between req and res object in every route setup
// but there is method called "use": in which i'll pass my middleware and it will apply for every route we have 
// app.use(logger);
// also if i want to apply middlewasre to any specific routes rthen I can also provide path of routes 
// path of base routes 
// ex: app.use('/api', logger);
// using above my middleware will apply to those routes only which will start from /api/....and so on
// but to [/,/abouty,/home] it will not apply .

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
// 1.// middleware : middleware are the functions that execute during the request to the server.
// each middleware functions has access to req and res object and when it comes to the functionality literally sky ios the limit 
/**
 const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}
 */