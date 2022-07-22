var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('this is coming here');
  res.render('user');
});

router.get('/new', (req, res) => {
  // render the create form
  res.render('userForm');
});


router.post('/', (req, res) => {
  // capture form data
});

router.get('/:id', (req, res) => {
  // single user detail
  res.render('singleUser.ejs');
});

router.get('/:id/edit', (req, res) => {
  // edit form
});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
