const mongoose=require("mongoose");
const MovieSchema=new mongoose.Schema({
    name:{type:String, required:true},
    ratings:{type:Number, required:true},
    release_date:{type:Date,  min: '1987-09-28', max: '2022-05-23', required:true},

},
{versionKey:false,
timestamps:true})
module.exports=mongoose.model("movie",MovieSchema)