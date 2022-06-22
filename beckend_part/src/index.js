const express =require("express")
const app =express();
const cors = require("cors")

app.use(express.json())

const connect=require("./config/db")
const movieController=require("./controller/movieController");

app.use(cors())
app.use("/movie",movieController)


app.listen(1222,async function(){
    try{
        await connect()
    console.log("port 1222 is working fine")
    }
    catch(e){
    console.log(e.message);
    }
})