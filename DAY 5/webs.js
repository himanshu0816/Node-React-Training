const express=require('express')

const webs=express();

webs.get('/',function(req,res){
    res.send("Hello world")
})
const PORT=process.env.PORT || 3000
webs.listen(PORT,function(req,res){
    console.log("Running...")
})