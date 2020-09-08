const mongoose=require("mongoose");

const TrendingSchema=mongoose.Schema({
    name:String
})

module.exports=mongoose.model("Trending",TrendingSchema); 