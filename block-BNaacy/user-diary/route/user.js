var express = require('express');
var router = express.Router();
var user = require('../models/user')

router.get('/', (req, res) => {
  res.render('user');
});

router.get('/new', (req, res) => {
  // render the create form
  res.render('userForm');
});

router.post('/', (req, res) => {
  // capture form data
  console.log(req.body);
  user.create(req.body,(err,user) => {
    if(err) return res.redirect('/user/new');
    res.redirect('/')
  })
});

module.exports = router;