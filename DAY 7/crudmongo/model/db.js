const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://himanshu:1234567890@cluster0.pybcl.mongodb.net/EmpDB?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err) =>{
    if(!err) console.log("Mongodb Connected Succesfully")
    else
    console.log("problem occur",err)
    
})