const User = require('../models/users')

const validateForm = (formData) => {
    const errors = []

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
        let errors = validateForm(req.body)
        
        if(errors.length > 0) {
            res.send(errors)
        } else {
            //create user
            const newUser = new User({username:req.body.username,password:req.body.password})
            newUser.save((err,user) => {
                if(err) return console.error(err)
                res.send(newUser)
            })
    
        }
}

module.exports = {
    registerUser: registerUser
}