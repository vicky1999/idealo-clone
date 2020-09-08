const mongoose = require('mongoose');

const BargainSchema=mongoose.Schema({
    name: String,
    price: String,
    imageUrl:String
})

module.exports=mongoose.model('Bargains',BargainSchema);