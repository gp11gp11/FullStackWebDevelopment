const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
    
app.post("/", function(req, res){
    // console.log(req.body.num1);// get in text 
    var num1 = parseFloat(req.body.height);
    var num2 = parseFloat(req.body.weight);
    var result = (num2/(num1*num1))*10000;
    
    res.send("your bmi is "+ Math.floor(result));// to get the post - npm install body-parser
});
app.listen(3000, function(){
    console.log("server running on port 3000");
});