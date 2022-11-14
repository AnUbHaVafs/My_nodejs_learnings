const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

//now if you go to mthods-public u will find a form nqamed index.html now, in that form see the form tage 
//  <form action="/login" method="POST">
// post request is sending to the server on route '/login' whenever submit nutton clicked.
// so first we use app.use aned static middleware to serve thods contents as static assets and we create the 
// that route of login with post request and see vbelow :
// app.use(express.urlencoded({ extended: false })) --we use this why ?
// urlencoded is a built-in middleware function which adds the incoming data to the server to the req.body
// extended as default as true -=-why ? go to docs 
// in req.bosy now we have one key as 'name' with the value of user name data.
app.post('/login', (req, res) => {
    const { name } = req.body  //as u can see here
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credentials')
})




// app.post('/api/people', (req, res) => {
//     const { name } = req.body
//     if (!name) {
//         return res
//             .status(400)
//             .json({ success: false, msg: 'please provide name value' })
//     }
//     res.status(201).json({ success: true, person: name })
// })

// app.post('/api/postman/people', (req, res) => {
//     const { name } = req.body
//     if (!name) {
//         return res
//             .status(400)
//             .json({ success: false, msg: 'please provide name value' })
//     }
//     res.status(201).json({ success: true, data: [...people, name] })
// })


// app.put('/api/people/:id', (req, res) => {
//   const { id } = req.params
//   const { name } = req.body

//   const person = people.find((person) => person.id === Number(id))

//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${id}` })
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name
//     }
//     return person
//   })
//   res.status(200).json({ success: true, data: newPeople })
// })

// app.delete('/api/people/:id', (req, res) => {
//   const person = people.find((person) => person.id === Number(req.params.id))
//   if (!person) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no person with id ${req.params.id}` })
//   }
//   const newPeople = people.filter(
//     (person) => person.id !== Number(req.params.id)
//   )
//   return res.status(200).json({ success: true, data: newPeople })
// })

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
