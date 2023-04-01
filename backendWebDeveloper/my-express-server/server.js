//jshint eversion:6

const express = require("express");
const app =  express(); //function that represent express module
// to specify if request happens
app.get("/",function(request, response){
    console.log(request);
    response.send("<h1>Hello world</h1>");
});


app.listen(3000, function(){// access from browser - localhost:3000
    console.log("server started at port 3000");
});