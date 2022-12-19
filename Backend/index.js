const express = require('express');
const route = require('./routes/route.js');
const app = express();
const multer=require("multer")
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any())
app.use(cookieParser());

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
