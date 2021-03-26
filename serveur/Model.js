const mongoose = require("mongoose");
let personne= new mongoose.Schema({FirstName:String,LastName:String,email:String, phone:Number,address:String});
let personModel=mongoose.model('Person', personne);
module.exports=personModel;
