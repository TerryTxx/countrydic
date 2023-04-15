// To test get post, you can change the entry file in scripts in package.json to this
const express = require("express");
const app = express();
// Introduce the body-parser module to parse the parameters in the post request body
const bodyParser = require("body-parser");
// expose
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
//get
app.get("/testget",(req,res)=>{
    console.log(req.query);
    res.send("return get request");
})

//post
app.post("/testPost",(req,res)=>{
    console.log(req.query);
    res.send("return post request");
})

//post ajax request
//post request port number/a specific file under the exposed file (the path must be written in full)
// http://localhost:3000/html/index2.html
app.post("/index2",(req,res)=>{
    console.log(req.body);
    res.send("index2 post request");
})

//Declare an empty object and put the parameters of the request body into the empty object
// Connect with the testPost code above
const pp = {};
app.post("/index3",(req,res)=>{
    console.log(req.body);
    pp = req.body;
})

//monitor
app.listen(3000,err=>{
    if(!err) console.log("The server started successfully!");
    else console. log(err);
})