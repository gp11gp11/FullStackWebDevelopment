const request = require("request");
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));// when runned initially will not pull local files with the code
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname +"/signup.html");

});

app.post("/", function(req, res){// inorder to work have  to mention method and aciton in form in html file

    const firstName = req.body.fName;
    const secondName = req.body.lName;
    const email = req.body.email;

    const data = {
        member: [
            {
                email_address : email,
                status : "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://usX.api.mailchimp.com/3.0/lists/customer_ID";

    const option = {
        method: "POST",
        auth: "key"

    }
    const request = https.request(url, option, function(response){

        if (response.statusCode === 200){
            res.sendFile(__dirname +"/success.html") ;

        }else {
            res.sendFile(__dirname+"/failure.html") ;
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));

        });

    });
    request.write(jsonData);
    request.end();
    

});

app.post("/failure", function(req,res){
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){//Dynamic port that heroku will decide, since host on external server
    console.log("server running  on port 3000");
});

