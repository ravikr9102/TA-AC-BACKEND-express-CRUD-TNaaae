var express = require('express');
var router = express.Router();
var user = require('../models/user')

router.get('/', (req, res,next) => {
    // handle action
    user.find({},(err,user)=> {
        if(err) return next(err);
        res.render('user',{ user: user })
    });
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
    });
  });

router.get('/:id', (req, res, next ) => {
  // single user detail
  var id = req.params.id;
  user.findById(id,(err,user) => {
    if(err) return next(err)
    res.render('singleUser',{ user });
  });
});


router.get('/:id/edit', (req, res) => {
  // edit form
});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;