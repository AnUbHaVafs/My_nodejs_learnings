const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()
// yeh function automatically call ho jayega whenever we import tghis file/module in any other module
// jb bhi hm kisi module ko importt yeh require krte hain like as below
// require('./07-mind-grenade')
// isko likhne bss yeh module invoike hojayega and hence addValues() function bhi invokje hojayega