const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {

  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('all-posts', {
      posts
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: [
          'username'
        ]
      },
      include: {
        model: Comment,
        attributes: [
          'body',
          'date'
        ],
        include: {
          model: User,
          attributes: [
            'username'
          ]
        }
      }
    });

    const post = postData.get({ plain: true });

    res.render('single-post', {
      post
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
