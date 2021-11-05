const mongoose = require("mongoose");
const prototypeSchema = new mongoose.Schema({
    name:String,
    size:String,
    image:String,
    
   // gender:String,
   // designer:String
})
const prototype = mongoose.model("prototype",prototypeSchema);


module.exports = prototype;
