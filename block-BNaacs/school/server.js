var express = require('express');

var app = express();

// middlewares
app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.get('/',(req,res) => {
    res.render('index.ejs')
});

app.listen(3000,() => {
    console.log('server listening on port 3k');
})