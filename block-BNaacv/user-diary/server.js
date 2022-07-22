var express = require('express');
var path = require('path');
var usersRouter = require('./route/user');

var app = express();

// middlewares
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: false }));


app.use('/user',usersRouter);


// handleerror
app.use((req,res) => {
    res.status(404).send('page not found')
});

app.listen(3000,() => {
    console.log('server is listening on port 3k');
});



