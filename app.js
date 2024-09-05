//const http=require('node:http')
const express= require('express')
const app=express()
app.use((req , res , next)=>{
  console.log('i am middleware')
  next()
})
app.use((req , res , next)=>{
  console.log('i am another middleware')
  res.send('<h1>Hello From Express js</h1>')
})

// const server=http.createServer(app)
// server.listen(3000)
app.listen(3000)