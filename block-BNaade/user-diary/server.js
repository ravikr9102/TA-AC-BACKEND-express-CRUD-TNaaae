// requires
var express = require('express');
var path = require('path');
var usersRouter = require('./route/user');
var mongoose = require('mongoose');

// instantiate the app
var app = express();

// connect to database
mongoose.connect("mongodb://localhost:27017/user-diary  ",(err) => {
    console.log(err ? err : "Connected to database" );
});


// middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: false }));


app.use('/user',usersRouter);


// handleerror
app.use((req,res,next) => {
    res.status(404).send('page not found')
});

// custom error handle 
app.use((err,req,res,next) => {
    res.send(err)
});

app.listen(3000,() => {
    console.log('server is listening on port 3k');
});