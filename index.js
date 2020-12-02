const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 1929
const path = require('path')
const htmlDir = path.join(__dirname,'html/')
const routes = require('./server/routes.js')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mybeerwalletmvp', {useNewUrlParser:true})

app.use(express.static(htmlDir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended:true} ))

//routes
routes.initRoutes(app, htmlDir)





app.listen(port, console.log('listening on port ' + port))