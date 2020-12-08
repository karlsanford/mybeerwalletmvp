const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 1929
const path = require('path')
const htmlDir = path.join(__dirname,'html/')
const routes = require('./server/routes.js')
const mongooseInit = require('./server/config/mongooseConfig.js')



app.use(express.static(htmlDir))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended:true} ))

//init routes
routes.initRoutes(app, htmlDir)

//init mongoose
mongooseInit()





app.listen(port, console.log('listening on port ' + port))