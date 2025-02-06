console.clear()
const path = require('path')
const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config({
  path: path.join(__dirname,'config','config.env')
})

//Database Connection
const connectDB = require('./config/connectDatabase')
connectDB()

const app = express()
const studentRouter = require('./routes/studentRouter')
const urlViewer = require('./middlewares/urlViewer')

// cors - Cross Origin Resource Sharing
app.use(cors())

//Middleware to View the URL flow (Not Mandatory)
app.use(urlViewer)

//Handles Form data & Json data
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//Links with Router
app.use('/',studentRouter)

//Server Initializing
app.listen(process.env.PORT,()=>{
  console.log('Server listening in Port '+process.env.PORT+'💖')
})




