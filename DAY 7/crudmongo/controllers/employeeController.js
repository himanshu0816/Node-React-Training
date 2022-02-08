const express = require('express')
const Employee = require('../model/employee.model')
const router = express.Router()

router.get('/',(req,res) =>{
    res.render('employee/addorEdit',{viewTitle:"Add Employee"})
})

router.post('/addEmp',(req,res) =>{
    console.log(req.body)
    let employee = new Employee()
    employee.fullName = req.body.name
    employee.email = req.body.email
    employee.mobile = req.body.pno
    employee.password = req.body.password
    employee.save((err,doc) =>{
        if(!err) res.redirect('employee/list')
        else
        console.log('Error during insertion',err)
    })   
})

router.get('/employee/list',(req,res) =>{
    Employee.find((err,result) =>{
        if(!err){
            console.log(result)
            res.render('employee/list',{
                list:result
            })
        }else{
            console.log("Error during fetching the data",err)
        }
    })
})


module.exports = router