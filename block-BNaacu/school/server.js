// requires
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var studentsRouter = require('./routes/student');


// connect to database
mongoose.connect("mongodb://localhost:27017/school  ",(err) => {
    console.log(err ? err : "Connected to database" );
});

// instantiate the app
var app = express();

// middlewares
app.set(' view engine','ejs');
app.set('views', path.join(__dirname,"views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use('/student',studentsRouter);


// handle error
app.use((req,res,next) => {
    res.status(404).send('page not found')
});

// listener
app.listen(4000,() => {
    console.log('server listening on port 4k');
});
