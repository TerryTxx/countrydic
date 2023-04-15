// entry file change server restart
// npm i -D nodemon
const express = require("express");
const app = express();
//1. type hosts static files
// app. use(express. static("public"));
// http://localhost:3000/html/index1.html
// http://localhost:3000/images/1.jpg

// 2. type hosts static files
app.use("/pack",express.static("public"));
// http://localhost:3000/pack/html/index1.html
// http://localhost:3000/pack/images/1.jpg

// listen
app.listen(3000,err=>{
    if(!err) console.log("web server running!");
    else console. log(err);
})
