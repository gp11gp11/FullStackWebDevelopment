//jshint esversion:6

// console.log(module);
// module.exports= "Running date.js";
// module.exports = getDate;

// module.exports.getDate = getDate;

// function getDate(){
//     var today = new Date();
//     let option = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     }
//     return  today.toLocaleDateString("en-US", option);
    

// }
// module.exports.getDay = getDay;

// function getDay(){
//     var today = new Date();
//     let option = {
//         weekday: "long"
//     }
//     return   today.toLocaleDateString("en-US", option);
    

// }

module.exports.getDate = function(){
    const today = new Date();
    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return  today.toLocaleDateString("en-US", option);
    

}
module.exports.getDay = function(){
    const today = new Date();
    const option = {
        weekday: "long"
    }
    return   today.toLocaleDateString("en-US", option);
    

}