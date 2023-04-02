const { response } = require("express");
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){

    res.sendFile(__dirname+"/index.html");
   
});

app.post("/",function(req, res){
    const query = req.body.cityName;
    const apiKey = "9e8e339b4ab48fe13a579140ab9d07a8"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+ unit;//must include https
    https.get(url, function(response){
        // console.log(response);
        // console.log(response.statusCode);
        // response.on("data", function(data){
        //     console.log(data);// get data in hexadecimal format
        // });
        response.on("data",function(data){
            const weatherData = JSON.parse(data);//will convert to js object
            // console.log(JSON.stringify(weatherData));// convert to string
            const temp = weatherData.main.temp;//use json viewer to get path
            // console.log(temp)
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "https://api.openweathermap.org/img/wn/"+icon+"@2x.png";
            // console.log(description)
            // res.send("<h1>The temperature is "+ temp+ " degree celcius.<br>"+ "The weather is currently "+description+ "<h1/>");//at a time two res.send will cause error
            res.write("<p>The weather is currently "+description +"</p>");//multiple res.write can be done instead of res.send
            res.write("<h1>The temperature is "+ temp+ " degree celcius in London.<h1/>");
            // To fetch weather image
            res.write("<img src="+imageUrl+">");
            res.send();
        
        }); 
    });

    // res.send("server is up and running")

});


app.listen(3000,function(){
    console.log("server is running on port 3000");
});