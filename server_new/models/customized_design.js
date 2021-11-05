const mongoose = require("mongoose");
const customized_designSchema = mongoose.Schema({
    name:String,
    Prototype:{type: mongoose.Schema.Types.ObjectId, ref:'prototype'},
    //user:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
    item:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'item'}
      ],
    size:String,
    image:String,
    
 
})
const customized_design = mongoose.model("customized_design",customized_designSchema);


module.exports = customized_design;