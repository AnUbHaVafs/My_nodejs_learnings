var http = require('http')
var fs = require('fs')
const { now } = require('lodash')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text) ---------------------> 1.8MB file size , its going completely on web browser at once 
    // through stream(createReadStream) , it reads the data or file in chunks .
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) // pipe is used to wirte the data in chunks as well, we
      // will read the data in chunks and write the data in chunks as well
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
  // -----------------HTTP ----------------------//
  // now, hb kya krte hai ki joh bhi resouce chahiye hota hai woh hm browser mein typre krte hain
  // and then uspr navigate krte hain ,
  // so basicALLY WHATWE ARE DOINGI we are looking for the SERVER which can give us the required
  // resoucres so , when we type the requirement in web browser url , we are generating
  // request and in response we are hgetting the servers which gives us the resiources
  // This exchanges of data happens with the HTTP protocol and hence this request
  // and response are then called as http request and http response .
// A cloud is a buch of server connected to each other .
///////////////////////////////////////////////////////////////
/*

Look at the screenshots
Now, first we write the what type of operation we want to perform (http method, GET is the default http method of browser since we all most read the data majority ioftimes )
status code : it is the signal what is the result of the requestr
200 : success
400 : request error
404 : resouces does not found
401 : inaithorize access
*/

// now go to next folder of 02-express-tutorial / final folder