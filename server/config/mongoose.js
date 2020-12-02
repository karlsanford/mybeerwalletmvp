const mongoose = require('mongoose')
const dbConnection = 'mongodb://localhost:27017/mybeerwalletmvp'

module.exports = () => {
    mongoose.connect(dbConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection
    db.on('error',console.error.bind(console,'db connection error...'));
    db.once('open',function callback(){
        console.log('db connected: ' + dbConnection);
    })
}