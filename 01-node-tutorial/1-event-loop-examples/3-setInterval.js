setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error


///// synchronous will run first and asynchronous will get just offloaded (registered callbacks)