const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  //jb mein products pr click krunga toh endpoint kya hojayega ?
  // localhost://5000/api/products which don't exists !
  //so therefore see below 
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product //product among products have many keys
    return { id, name, image }
  })

  res.json(newProducts)
})
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => { product.id === 1 })
//     res.json(singleProduct);
// })
// but this is specifically for product 1 , since we have 4 product in total, we have set 
// 4 routes , what if we will have 1000 product ?
// in that case we can't setup so many routes !
// therefore we have to use ROUTE PARAMETER 
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)  ----> o/p = { productID: '1' }
  // so in req.params we have key as productID which have the id of our product which user has type in 
  // Note that it has the priductID in string format !
  // so use Number(productID)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) { // if the specific product or productID didn't exist in our db or it's value is undefined then
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params) //
  // o/p = {productID : '1', reviewID = 'abc'} -- example 
  // now you can use productID and reviewID 
  res.send('hello world')
})
//////////////////////////////////////////////////////////////////////////
// query string parameter are also called url parameters
//////////////////// Query String parameter
// suppose the user wants to get data by applying filters like 
// I want only pageno. 2 among all the pages content ,
// then he will request for this url :
// localhost://hn.algolia.com/api/v1/search?query=bars&tags=comment
// in this url what is happening ?
// I'm requesting for the v1 version data and also I used search keyword to filter the data further more 
// till serach keyword including it , we called it url aftyer question mark its the query string paramters
// that we will use to filter out the data 
// they are key values pairs and we cannot assign any random key to a server .
// expect the data whioch we want .
// all keys are defined in the server itself.

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  // suppose user type localhost://5000/api/v1/query?name=anubhav&age=19
  // then name=anubhav and age=19 are query string parameters 
  // also we can use any key value pairs names 
  // they all can be fetched from req.query 
  //so if user given query string paramters as search and limit then:
  const { search, limit } = req.query
  let sortedProducts = [...products]
  res.end()
  // o/p :
  //http://localhost:5000/api/v1/query?name=Anubhav&age=19
  //     Server is listening on port 5000....
  //     { name: 'Anubhav', age: '19' }

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

