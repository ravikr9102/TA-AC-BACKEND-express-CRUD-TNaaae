var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/new', (req, res, next) => {
  // render the create form
  res.render('userForm');
});

// CREATE

router.post('/', (req, res, next) => {
  // capture form data
  console.log(req.body);
  user.create(req.body, (err, user) => {
    if (err) return res.redirect('/user/new');
    res.redirect('/');
  });
});

// READ

router.get('/', (req, res,next) => {
    // handle action
    user.find({},(err,user)=> {
        if(err) return next(err);
        res.render('userList',{ user: user })
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

  // UPDATE

  router.get('/:id/edit', (req, res,next) => {
    // edit form
    var id = req.params.id;
    user.findById(id,(err,user) => {
      if(err) return next(err)
      res.render('editUser',{ user })
    });
  });
  
  router.post('/:id', (req, res,next) => {
      // update form
      var id = req.params.id;
      user.findByIdAndUpdate(id, req.body, (err,updateUser) => {
          if(err) return(err);
          res.redirect('/user')
      })
  });

  // DELETE
  router.get('/:id/delete', (req, res) => {
    // delete the user
    var id = req.params.id;
    user.findByIdAndDelete(id,(err,deleteUser) => {
        if(err) return(err);
        res.redirect('/user')
    })
});


module.exports = router;
