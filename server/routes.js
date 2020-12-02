const initRoutes = (app, htmlDir) => {
    app.get('/', (req,res) => {
        res.sendFile(htmlDir + 'index.html')
    })
    
    //register
    app.get('/register', (req,res) => {
        res.sendFile(htmlDir + 'register.html')
    })
    app.post('/register', (req,res) => {
        console.log(req.body)
        const errors = []
        const body = req.body
        
        //validate form
        if(!body.password) {
            errors.push('no password received')
        }
    
        if(!body.username) {
            errors.push('no username received')
        }
    
        if(body.password != body.confirmpassword) {
            errors.push('passwords do not match')
        }
    
        if(errors.length > 0) {
            res.send(errors)
        } else {
            res.send('form validated')
            //create user
    
        }
    })
    
    app.get('/login', (req,res) => {
        res.sendFile(htmlDir + 'login.html')
    })
}

module.exports = {
    initRoutes: initRoutes
}
