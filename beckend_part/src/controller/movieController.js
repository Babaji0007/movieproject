const express =require("express")
const router=express.Router()
const Movie=require("../model/movieModel")


router.post("",async(req,res)=>{
    try {
        const movie=await Movie.create(req.body);
        res.send(movie);
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
router.get("",async(req,res)=>{
    try {
        const movie=await Movie.find().lean().exec()
        res.status(201).send(movie);
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports=router