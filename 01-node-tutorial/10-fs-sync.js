const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt', // if result-sync.txt does not exist, then it will create else it will override all the the contents of it 
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } // by default override option is enabled but if we set this flag to 'a' 
  // then we can append the content to the previous content(available content in the file already)

)
console.log('done with this task')
console.log('starting the next one')

// this is synchronous approach means if user1 is ruuning a task user2 cannot access it until that task gets finished .
// but vice-cersa with async 
// do console output in terminal 