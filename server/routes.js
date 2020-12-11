const userCtrl = require('./controllers/user-controller')

const initRoutes = (app, htmlDir) => {
    app.get('/', (req,res) => {
        res.sendFile(htmlDir + 'index.html')
    })
    
    //register
    
    app.get('/register', (req,res) => {
        res.sendFile(htmlDir + 'register.html')
    })
    app.post('/register', userCtrl.registerUser)
    
    //login
    app.get('/login', (req,res) => {
        res.sendFile(htmlDir + 'login.html')
    })

    app.post('/login', userCtrl.loginUser)

    //protected
    app.get('/protected', (req,res) => {
        res.sendFile(htmlDir + 'protected.html')
    })
}

module.exports = {
    initRoutes: initRoutes
}
