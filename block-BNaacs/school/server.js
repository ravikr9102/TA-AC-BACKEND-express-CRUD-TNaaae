var express = require('express');
var path = require('path');

var app = express();

// middlewares
app.set('view engine','ejs');
app.set('views', path.join(_dirname , 'views'));

app.get('/',(req,res) => {
    res.render('index.ejs')
});

app.listen(3000,() => {
    console.log('server listening on port 3k');
})