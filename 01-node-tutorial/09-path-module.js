const path = require('path')

console.log(path.sep)
// o/p = /
// platform specific path ko seperate krega platform se 

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)
// o/p = /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base)
// o/p = test.txt (base file name)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
