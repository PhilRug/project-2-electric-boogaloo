const router = require('express').Router();
const { User, Plant, Pin } = require('../models');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['username', 'ASC']],
      });
      const users = userData.map((project) => project.get({ plain: true }));  
      res.render('homepage', {
        users,        
        logged_in: req.session.logged_in,  
      });
    } catch (err) {
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
  
  // router.get('/signup', (req, res) => {
    //   if (req.session.loggedIn) {
      //     res.redirect('/login');
      //     return;
      //   }
      
      //   res.render('signup');
      // });
      
      // router.get('/:id', withAuth, async (req, res) => {
      //   try {
      //       const onePlant = await Plant.findByPk(req.params.id, {
      //       });
      //       res.status(200).json(onePlant);
      //       } catch (err) {
      //         res.status(500).json(err);
      //       }
      //     });
      
  module.exports = router;