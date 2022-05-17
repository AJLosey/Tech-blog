const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {

  try {
    const posts = await Post.findAll();
    res.render('all-posts', {

    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {

});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
