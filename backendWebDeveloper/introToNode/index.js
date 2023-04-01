//jshint eversion:6 
const fs = require("fs"); //cannot change value of variable latter
fs.copyFileSync("file1.txt", "file2.txt");
