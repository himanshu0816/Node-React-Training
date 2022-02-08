const express=require('express')
const app = express();
var fs=require('fs');

app.get('/app',(req,res)=>{
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        res.end(data);
    });
})
const PORT=process.env.PORT||3000
app.listen(PORT, (req,res)=>{
    console.log("server is running on"+PORT)
})