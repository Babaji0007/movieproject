const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://rahul:rahul123@cluster0.vrqv0.mongodb.net/moviedetailes")
}
module.exports=connect