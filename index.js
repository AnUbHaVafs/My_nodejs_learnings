const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')

/////// o/p =
// started a first task
// starting next task
// text file content
// completed first task

// Why this happens , offcourse since readFile is async and event loop just offload(registered callback) this
// due to presence of callback in it and then ...
// offload this to file system 

