const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: [true, 'Please add a name']
    },
    imageUrl: {
        type: String,
       // required: [true, 'Please select an image']
    },


});

module.exports = mongoose.model('item', itemSchema);