const express = require('express')
const app = express()
const { people } = require('./data')
app.get('/', (req, res) => {
  res.json(people) // koi bhi type ka data wll get converted to json type // if input is already json type no change will occur in response.
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
