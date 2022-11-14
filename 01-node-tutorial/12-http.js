const http = require('http')

const server = http.createServer((req, res) => {
  /// both req and res are the objects , with which we have associated methods with them 
  /// req : whatever the request user is sending to my web browser is contained in it 
  /// req is a giant object it has plethora of methods in it .
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
/// npm : node package manager
/// npm enables us to do three things : 
/// reuse our own code in other projects 
/// use code written by other developers 
/// share our own solution with other developers as well
/// a package essentially a folder that contains the javascript code 
/// package , modules and dependencies , these all are interchangable till we are talking about the shareable js code 



////////////////////////////////
/*
npm - global command, comes with node 
npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it any project 
// npm install -g <packageName>


///////---> so whenever we talk about dependencies we also talk about package.json ///////////


// package.json - manifest file(stores important info about project/package)
3 ways to create package.json are :
// manual approach (create package.json in root , create properties etc )
// npm init (step by step queries will be asked to me, press enter to skip )
// npm init -y (everything default)


/// what is the use of package.json ?

it sores the local dependencies in dependencies object in package.json 
also, as soon as we install the dependencies,node vreates a folder called "node-modules"
which have all our dependencies in it.

for ex : run "npm i lodash"

Now, 
cool stuff :

if there is a big module which have its other own dependent modules then they also get installed by themselves in node-modules folder, 
for example : run "npm i bootstrap"
in node-modules you will find other modules also like 
jquery.js and popper.js which are depenedent modules of bootstrap 


/////////////////////////////////////////////////////////

Importance of package.json ?

Bhai bahut hi imp file hai yeh poackage.json
kyun?
because package.json k andhar woh saari dependencies hoti hain joh hmne use krin hai apne projects mein 
and hm woh dependencies node modules folder mein rakhte hain and woh node modules folder share mhi 
nhi krte or push nhi krte hain git repo mein kyunki uska size bahut jyada hi bda hota hai in gegabytes mein hota hai
isliye hm usko push nhi krte instead hm log package.json push krte hain taaki kisi dosre developer ko yeh pta chl jaye ki hmne kon konse 
dependencies use ki hai apne project mein and jb woh con ekrega toh sirf usko ek command rum krni hai 
"git install"---> yeh command wo saari dependencies install krdegi automatically joh joh poacage.json k andhar jhai
isliye bahut hi jyada important filr hai yeh .

Use of .gitignore ?
.gitignore file k andhar hm voh files and folders k names store krte hain jinko hme github pr push nhi krna 


syntax for installing dev dependencies are :
1. npm i nodemon -D
2. npm i nodemon --save-dev
*/

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
    

  //                 Event Loop                  //

/*
whenever there is some time conssuming operation nedds to perform ,event loop registers that task
to call backs, and when all the immediate operations are done once,then it will start executing the
registered call backs.

Explanation : look at the screenshot of event loop,
-----------   sbse phle immediate code run hoga and uske baad hamara time consuming operation 
execute hoga .
jaise multiple users are requesting for a same resource, and some are reuqesting for data internally,
then event loop voh task joh joh related hai to access database, files systems, networks and others related
in sb k callbacks register krdega and jb immediate operation hojayenge then, inn call backs ko execute krna start krega
for examples : 
go to course-api.com and then go to slides and then to nodejs ther you will find it event lopp

Using event loop , we can offloading some time consuming operations 
offload ka mtlb hm callbacks register krdenmge time consuming operation k.

Now, got to :
event-loop-examples directory 
*/






















