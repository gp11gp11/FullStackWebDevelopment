const express = require("express");
const bodyParser = require("body-parser");

const app =  express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
    
app.post("/", function(req, res){
    // console.log(req.body.num1);// get in text 
    var num1 = number(req.body.num1);
    var num1 = number(req.body.num2);
    var result = num1+num2;
    
    res.send("The result is :"+ result);// to get the post - npm install body-parser
});
app.listen(3000, function(){
    console.log("server running on port 3000");
});