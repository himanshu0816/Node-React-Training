const express= require('express')
const router= require.Router()
router.get('/',(req,res)=>{
    res.json({msg:'All data Created'})
})
module.exports=router