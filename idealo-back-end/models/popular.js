const mongoose = require('mongoose');

const PopularSchema=mongoose.Schema({
    name: String,
    price: String,
    imageUrl:String
})

module.exports=mongoose.model('Popular',PopularSchema);