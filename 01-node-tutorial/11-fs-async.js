const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { // if we dont provide the encoding (utf8) here , then we get buffer 
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
        console.log(result); // first time isko run krunga toh undefined ayega kyunki initially we have nothing in the write file

      }
    )
  })
})
console.log('starting next task')


////////
// hamne ek call back k andhar nested callbacks kyun likhe hain ?
// kyunki jb hmne first.txt ko read kiya through result then, we can access the value of first only inside the callback fumnction not outside the call back function so, nested all callbacks
// how to comprehend callback ?
// jaise event listeners hote hain then callback function implement hiota hai after that event happenend 
// vaise hi jb ham apne specify path pr pahunch jayenge tb jakr hamara voh callback function implement hoga 
// jb functionalities saari hojati hain tb jakr hamara callback function implement hota hai
// async == non-blocking
// sync == blocking 
// toh reult hamara ha,esha undefined hi rahega 