var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
/** 1) Install & Set up mongoose */
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
// app.get("/",(req,res)=>{
// res.send("Hello Express");
// })
// you can respond to a  file with the res,sendFile

// app.get("/",(req,res)=>{
//    res.sendFile(__dirname+"/views/index.html");
//  })
// // you can serve the static files here
// app.use(express.static(__dirname+"/public"))
// // --> 7)  Mount the Logger middleware here

// app.get("/json",(req,res)=>{
//   res.json({"message": "Hello json"})
// })

//  middlewere must be wriiten before
// the route you want to fiter or anyhthing
// app.use(function(req,res,next){
//   var string = req.method + " " + req.path + " - " + req.ip;
//   console.log(string);
//   next();
// })

// app.get("/now",(req,res,next)=>{
//     // we prepare the time string
//     // here
//   req.time = new Date().toString();
//   next();

// },
// (req,res)=>{
//    res.send({
//      time :req.time
//    });
// })

// app.get("/:word/echo",(req,res)=>{
//   var {word} = req.params;
//   res.json({
//     echo:word
//   })
// })

// how to deal with the query string
// we use the query parameter
// app.get("/name",(req,res)=>{
//   var firstname = req.query.first;
//   var lastname  = req.query.last
//   res.json({
//     name:`${firstname} ${lastname}`
//   });
// });

// how to handle the post request
// app.post("/name",(req,res)=>{

//   var string = req.body.first +" " +req.body.last;
//   res.json({name:string});
// });

// app.get("/json",(req,res)=>{
//   if(process.env.MESSAGE_STYLE=="uppercase"){
//     res.json({"message": "HELLO JSON"})
//   }
//   res.json({"message": "Hello json"})
// })


// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */

/** 2) A first working Express Server */

/** 3) Serve an HTML file */

/** 4) Serve static assets  */

/** 5) serve JSON on a specific route */

/** 6) Use the .env file to configure the app */

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

/** 8) Chaining middleware. A Time server */

/** 9)  Get input from client - Route parameters */

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;
