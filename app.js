//const http=require('node:http')
const express= require('express')

const bodyParser=require('body-parser')
const app=express()
const adminRoutes=require('./Router/admin')
const shopRouter=require('./Router/shop')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin',adminRoutes)
app.use('/shop',shopRouter)
app.use((req , res, next)=>{
  res.status(404).send('<h1>PAGE NOT FOUND</h1>')
})


// const server=http.createServer(app)
// server.listen(3000)
app.listen(3000)