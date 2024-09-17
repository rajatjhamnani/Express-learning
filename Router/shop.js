const express=require('express')

const router=express.Router()

router.get('/',(req , res , next)=>{
  console.log('i am another middleware')
  res.send('<h1>Hello From Express js</h1>')
})
module.exports=router