const mongoose = require('mongoose')

//TODO put in config file
let config = {
    dbConnection: 'mongodb://localhost:27017/mybeerwalletmvp'
}


module.exports = () => {
    //mongodb deprecation warnings fixes:
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
  
    //connect to db
    mongoose.connect(config.dbConnection);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'db connection error...'));
    db.once('open', () => {
      console.log('db connected: ' + config.dbConnection);
      console.log(Date());
    });
  };