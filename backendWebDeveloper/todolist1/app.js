//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

// console.log(date)

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");// tell express to use ejs as its view engine
const items = ["exercise", "learning","working"];
const workItems = [];
app.get("/", function(req,res){
    // var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";

    // switch(currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //         console.log("error, current day is" + currentDay);               
    // }

    // let option = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // }
    // let day = today.toLocaleDateString("en-US", option);
    const day = date.getDay();
    res.render("list", {listTitle: day, newListItem : items});
});

app.post("/", function(req, res){
    console.log(req.body);
    
    const item = req.body.newItem;

    if (req.body.list === "Work"){

        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    

});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItem : workItems });
});

app.post("/work", function(req,res){
    res.render("list", {listTitle:"Work list", newListItem:workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.post("/about", function(req,res){
    res.render("list",);
});


app.listen(3000, function(){
    console.log("server is running at port 3000");
});