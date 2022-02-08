const express = require('express')
const db = require('../model/connection')
const router = express.Router()


router.get('/showAllEmp',(req,res) =>{
    let sql = "SELECT * FROM users";
    db.query(sql,(err,result) =>{
        if(err) throw err;
        // res.status(200).json({result})
        console.log(result)
        res.render('list',{list:result})
    })

})


router.get('/showSpecificEmp/:email',(req,res) =>{
    let email = req.params.email
  let sql = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.status(200).json({result})
    })
    
})

router.post("/createEmp",(req,res) =>{
    // console.log(req.body)
    const {name,email,pno,password} = {...req.body}

    const user = {name,email,pno,password}
    console.log(user)
    let sql = "INSERT INTO users SET ?"//
    console.log(sql)
    db.query(sql,user,(err,result) =>{
        if(err) throw err;
        // console.log(result)
        res.redirect("/api/showAllEmp")
    })
})

router.get('/createEmp',(req,res) =>{
    res.render("AddEmp",{viewTitle:"Add Emp"})
})

router.get('/updatedata',(req,res) =>{
    let sql = "SELECT * FROM users";
    db.query(sql,(err,result) =>{
        if(err) throw err;
        // res.status(200).json({result})
        // console.log(result)
        res.render('update',{list:result})
    })
})

router.get('/updateEmp/:id',(req,res) =>{
    // const id = req.params.id
    // console.log(req.params)
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
    // console.log(sql)
    db.query(sql,(err,result) =>{
        if(err) throw err;
        console.log(result)
        res.render('AddEmp',{list:result[0],viewTitle:"Update Emp"})
    })

})


router.post('/finalupdate',(req,res) =>{
    const {name,email,pno,password} = {...req.body}

let sql = `UPDATE users SET name = '${name}',pno='${pno}',password='${password}' WHERE email='${email}'`;
db.query(sql,(err,result) =>{
    if(err) throw err;
    res.redirect('/api/updatedata')
})
})

router.get('/deleteEmp/:id',(req,res) =>{
    let sql = `DELETE FROM users WHERE id = ${req.params.id} `;
    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.redirect('/api/updatedata')
    })
})

module.exports = router