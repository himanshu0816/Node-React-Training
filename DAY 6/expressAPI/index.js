const express = require('express')
const uuid = require('uuid')
const app = express()

const members = [
    {
        id:1,
        name:'John Doe',
        email:'john@gmail.com',
        status:'active'
    },
    {
        id:2,
        name:'stevekruzz',
        email:'john@gmail.com',
        status:'active'
    },
    {
        id:3,
        name:'Jane Doe',
        email:'john@gmail.com',
        status:'active'
    }];


app.use(express.json())
    //Get All Members
app.get('/api/members',(req,res) =>{
    res.json(members)
})
    //Get a specific members
app.get('/api/members/:uid',(req,res) =>{
    const found = members.some(member => member.id === parseInt(req.params.uid))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.uid)))
    }else{
        res.status(400).json({msg:`No member found with this ${req.params.uid} id`})
    }
})

//Add a Resource
app.post('/api/members/',(req,res) =>{
    console.log(req.body)
    const newMember = {
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }
    if(!newMember.name || !newMember.email){
        res.status(400).json({msg:'Please include an email and name'})
    }
    members.push(newMember)
    res.json(members)
})

//Update Member
app.put('/api/members/:id',(req,res) =>{
    const found = members.some(arsh => arsh.id === parseInt(req.params.id))
    if(found){
        const updMember = req.body
        members.forEach(insann =>{
            if(insann.id === parseInt(req.params.id)){
                insann.name = updMember.name
                insann.email = updMember.email
                return res.json({msg:'Member Updated',member:insann})
            }
        })
    }else{
        return res.status(400).json({msg:`No member found with id of ${req.params.id}`})
    }
})

//Delete Member
app.delete('/api/members/:id',(req,res)=>{
    const found = members.some((member) => member.id === parseInt(req.params.id))
    if(found){
        return res.json({msg:'Member Deleted',members:members.filter(member => member.id !== parseInt(req.params.id))})
    }else{
        return res.status(400).json({msg:`No member found with the id of ${req.params.id}`})
    }
})




const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Server running at ${PORT}`))