//const http=require('node:http')
const express= require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req , res , next)=>{
  console.log('i am middleware')
  res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="number" name="size" min="0"><button type="submit">ADD PRODUCT</button></form>')
})
app.post('/product', (req , res , next)=>{
  console.log(req.body)
  res.redirect('/')
})
app.use('/',(req , res , next)=>{
  console.log('i am another middleware')
  res.send('<h1>Hello From Express js</h1>')
})

// const server=http.createServer(app)
// server.listen(3000)
app.listen(3000)