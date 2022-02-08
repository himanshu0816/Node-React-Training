const express= require('express')
const app=express()
const controllers=require('./controllers/employeeController')
const db=require('./models/connection')

console.log("Test")
app.get('api/createEmployee',controllers)

const PORT=process.env.PORT||3000
app.listen(PORT,()=>console.log(`server running at port${PORT}`))
