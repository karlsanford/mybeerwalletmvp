const User = require('../models/users')
const bcrypt = require('bcrypt')

const validateRegForm = (formData) => {
    let errors = []

    if(!formData.password) errors.push('no password received')
    if(!formData.username) errors.push('no username received')
    if(!isValidEmail(formData.username)) errors.push('username is not a valid email')
    if(formData.password != formData.confirmpassword) errors.push('passwords do not match')

    return errors
}

const isValidEmail = (unvalidateEmail) => {
    //TODO add regex email validation
    return true;
}

const registerUser = (req,res) => {
    console.log(req.body)
    //validate form
    let errors = validateRegForm(req.body)
    
    if(errors.length > 0) {
        res.send(errors)
    } else {
        //create user
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if(err) res.send(err)
            const newUser = new User({username:req.body.username,password:hashedPassword})
            newUser.save((err,user) => {
                if(err) return console.error(err)
                res.send(newUser)
            })
        })
        

    }
}

const validateLoginForm = (formData) => {
    let errors = []

    if(!formData.username) errors.push('no user name')
    if(!formData.password) errors.push('no password provided')

    return errors
}

const loginUser = (req, res) => {
    console.log(req.body)
    let errors = validateLoginForm(req.body)

    if(errors.length > 0) {
        res.send(errors)
        return
    }

    User.findOne({username:req.body.username},(err, user) => {
        if(err) {
            res.send(err)
        } else {
            bcrypt.compare(req.body.password,user.password)
            .then( (passwordsMatch) => {
                if(passwordsMatch) {
                    res.send('you have been logged in')
                } else {
                    res.send('incorrect password')
                }
            })


            
        }
    })
}

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser
}