// //jshint eversion:6 
// const fs = require("fs"); //cannot change value of variable latter
// fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require("superheroes");
// var allNames = superheroes.all;
// console.log(allNames);
var names = superheroes.random();
console.log(names);

const supervillain = require("supervillains");
var villainName= supervillain.random();
console.log(villainName);