const mysql=require('mysql')

//Database connection
const db= mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'',
    database:'crudapp'
})
db.connect(err=>{
    if(err) throw err;
    console.log("Mysql Connected")
})
module.exports=db;