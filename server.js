const express= require('express')
const app=express()
const path=require('path')

const sequelize=require('./util/chatAPP')
const userRouter =require('./routes/user')

const user = require("./models/user");
const chat = require("./models/chatApp");

const jwt=require('jsonwebtoken')
const bodyparser=require('body-parser')
const chatRoute = require("./routes/chatAPP");

const cors=require('cors')
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
 app.use(express.static(path.join(__dirname,'views')))

 app.use('/',userRouter)
app.use('/',chatRoute)


user.hasMany(chat)
chat.belongsTo(user);



sequelize.sync({alter:true})
.then(()=>{
    

    app.listen(3000)
}) 
.catch((error)=>{
    console.log(error)

})


