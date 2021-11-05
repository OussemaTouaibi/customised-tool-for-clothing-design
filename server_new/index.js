const express = require('express');
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

require("./db/connectDB");





const usersRoutes = require('./routes/users');
const contactus = require("./routes/contactus");
const prototype = require("./routes/prototype");
const item = require("./routes/items");
const customized_design = require("./routes/customized_design");


// to Prevent NoSQL Injection Sanitize data
app.use(mongoSanitize());

// Set security headers to detect reflected cross-site scripting
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 1000 //just for test change it 1000
});
app.use(limiter);

// Prevent http param polution
app.use(hpp());

app.use(bodyparser.json({ limit: "100mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());


app.use("/contactus", contactus);
app.use("/dashboard", prototype);
app.use("/prototypes", prototype);
app.use("/items", item);
app.use("/mydesign", customized_design);

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});



//Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})
var publicDir = require('path').join(__dirname, '/public');
app.use('/uploads', express.static(publicDir));


// allow to excutes url of web services in such route
app.use('/users', usersRoutes);