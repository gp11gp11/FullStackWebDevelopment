//jshint eversion:6

//nodemon.io - help to reload automatically
//npm install -g nodemon
// in terminal - nodemon server.js - to run

const express = require("express");
const app =  express(); //function that represent express module
// to specify if request happens
app.get("/",function(request, response){
    console.log(request);
    response.send("<h1>Hello world</h1>");
});

app.get("/contact",function(req, res){
    res.send("contact me at: name@gmail.com");
});

app.get("/about",function(req, res){
    res.send("I am a computer science student");
});

app.listen(3000, function(){// access from browser - localhost:3000
    console.log("server started at port 3000");
});