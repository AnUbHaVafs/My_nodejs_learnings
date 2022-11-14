const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
/////////////////////////////////////////////////////////////
/**
 * const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))
//app.use is for setting up the middle ware
//static assets are the filkes that server doesnot have to chANGE
// static assets means the content do not have to change before going to the browser unlike 
// in the dynamic assets , which is suppose if Peter logs in , then it first changes the 
// content to Hi! Peter, before sending it to the browser.
// for dynamic assets , we will look at template engines further stage.
// but in express, it is very simple to deal/serve static assets that is just by 
// by crating a folder named public(anyname) and use ststic method over it.


// 


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    //   res.sendFile(path.join(__dirname, './navbar-app/index.html'))
    // adding to static assets
    // SSR // server side rendering means
    // we don't have to sendFile as above instead we can put index.html files also in public folder,
    // and it will be treated as root file for out server.
    // whenever a user hits the server index.html file will auotmatically rendered.
    // so what we can do is we can put all our staic files in public folder and let express
    // to do the tasks for us.
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})

// ?/ in express or http case,when we talk about API we means setting up an http interface 
// to interact with our data.
basicallt API serves our data and we can build the frontend app using our data.
 */