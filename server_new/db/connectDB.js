const mongoose = require('mongoose');
const logger = require('../middleware/logger');

//connect to db
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => logger.log('info',"DB connected establised"))
    .catch(err => logger.log('info',"DB connection error: ", err));